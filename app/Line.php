<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Line extends Model
{
    protected $table = 'lines';

    protected $fillable = ['name'];

    public function Champions()
    {
        return $this->hasMany('App\Champion','line_id','id');
    }
}
