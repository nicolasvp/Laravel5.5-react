<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Champion;
use App\Type;
use App\Line;

class TestController extends Controller
{
    public function index()
    {
        $types = Type::all();
        $lines = Line::all();
        $champions = Champion::with('line')->with('type')->get();
        return response()->json(['types' => $types,'lines' => $lines, 'champions' => $champions]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $dateRequest = $request->newChamp['date'];
        $date = strtotime($dateRequest);
        $formatedDate = date('Y-m-d',$date);

        $champion = Champion::create([
                        'name' => $request->newChamp['name'],
                        'type_id' => $request->newChamp['type'],
                        'line_id' => $request->newChamp['line'],
                        'date' => $formatedDate,
                        'genre' => $request->newChamp['genre'],
                    ]);

        return response()->json($champion);
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
        //
    }
}
