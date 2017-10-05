<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Champion extends Model
{
    protected $table = 'champions';

    protected $fillable = ['name','type_id','line_id','comment','genre','date'];

    public $timestamps = false;

    public function Type()
    {
        return $this->hasOne('App\Type','id','type_id');
    }

    public function Line()
    {
        return $this->hasOne('App\Line','id','line_id');
    }
}
