<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $table = 'types';

    protected $fillable = ['name'];

    public function Champions()
    {
        return $this->hasMany('App\Champion','type_id','id');
    }
}
