<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Champion extends Model
{
    protected $table = 'champions';

    protected $fillable = ['name','type','line'];

    public $timestamps = false;
}
