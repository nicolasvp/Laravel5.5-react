<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Champion;
use App\Type;
use App\Line;
use Validator;

class TestController extends Controller
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
        if($request->hasFile('photo-upload'))
        {
            $file = $request->file('photo-upload');
            $image_uploaded = \Storage::disk('public')->putFile('/', $file);            
        }

       Validator::make($request->all(), [
            'name' => 'required',
            'type_id' => 'required',
            'line_id' => 'required',
            'date' => 'required',
            'genre' => 'required',
            'photo' => 'required',
        ])->validate();

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
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $champ = Champion::findOrFail($id);
        $champ->delete();

        return response()->json('ok');
    }
}
