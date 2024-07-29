<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_name',
        'first_name',
        'last_name',
        'email',
        'birthdate',
        'basic_salary',
        'status',
        'group',
        'description'
    ];
}
