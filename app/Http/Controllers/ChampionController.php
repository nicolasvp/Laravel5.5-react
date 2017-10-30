<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Champion;
use App\Type;
use App\Line;
use Validator;

class ChampionController extends Controller
{
    public function index()
    {
        $types = Type::all();
        $lines = Line::all();
        $champions = Champion::with('line')->with('type')->get();
        return response()->json(['types' => $types,'lines' => $lines, 'champions' => $champions]);
    }

    public function store(Request $request)
    {
       Validator::make($request->all(), [
            'name' => 'required',
            'type' => 'required',
            'line' => 'required',
            'date' => 'required',
            'genre' => 'required',
           // 'photo' => 'required',
        ])->validate();

        if($request->hasFile('photo'))
        {
            $file = $request->file('photo');
            $image_uploaded = \Storage::disk('public')->putFile('/', $file);            
        }

        $dateRequest = $request['date'];
        $date = strtotime($dateRequest);
        $formatedDate = date('Y-m-d',$date);

        $champ_created = Champion::create([
                            'name' => $request['name'],
                            'type_id' => $request['type'],
                            'line_id' => $request['line'],
                            'date' => $formatedDate,
                            'genre' => $request['genre'],
                            'photo' => $image_uploaded
                        ]);

        return response()->json($champ_created->with('type')->with('line')->orderBy('id','desc')->first());
    }

    public function show($id)
    {
        $champion = Champion::find($id);

        return response()->json($champion->with('type')->with('line')->where('id',$id)->first());
    }

    public function edit($id)
    {
        $champion = Champion::find($id);

        return response()->json($champion);
    }

    public function updateChamp(Request $request)
    {

       Validator::make($request->all(), [
            'name' => 'required',
            'type' => 'required',
            'line' => 'required',
            'date' => 'required',
            'genre' => 'required',
           // 'photo' => 'required',
        ])->validate();
                
        $champ = Champion::find($request['id']);
        $dateRequest = $request['date'];
        $date = strtotime($dateRequest);
        $formatedDate = date('Y-m-d',$date);
        
        $champ->name = $request['name'];
        $champ->type_id = $request['type'];
        $champ->line_id = $request['line'];
        $champ->date = $formatedDate;
        $champ->genre = $request['genre'];

        if($request->hasFile('photo-upload'))
        {
            $file = $request->file('photo-upload');
            $image_uploaded = \Storage::disk('public')->putFile('/', $file);   
            \Storage::delete($champ->photo);    
            $champ->photo = $image_uploaded;     
        }

        $champ->save();

        return response()->json($champ->with('type')->with('line')->where('id',$request['id'])->first());
    }

    public function destroy($id)
    {
        $champ = Champion::findOrFail($id);
        $champ->delete();

        return response()->json('ok');
    }


}
