<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Champion extends Model
{
    protected $table = 'champions';

    protected $fillable = ['name','type_id','line_id','photo','genre','date'];

    public $timestamps = false;

    public function Type()
    {
        return $this->belongsTo('App\Type','type_id','id');
    }

    public function Line()
    {
        return $this->belongsTo('App\Line','line_id','id');
    }
}
