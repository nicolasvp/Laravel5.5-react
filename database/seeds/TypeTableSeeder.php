<?php

use Illuminate\Database\Seeder;

class TypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->insert([
            'name' => 'Support'
        ]);
        DB::table('types')->insert([
            'name' => 'Tank'
        ]);  
        DB::table('types')->insert([
            'name' => 'Magician'
        ]);        
        DB::table('types')->insert([
            'name' => 'Attack damage'
        ]);
        DB::table('types')->insert([
            'name' => 'Assassin'
        ]);
    }
}
