<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends \TCG\Voyager\Models\User
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Restituisce tutte le informazioni utente compresi ruoli e permessi
     *
     * @var array
     */
    function fullData()
    {
        $this->role_list = $this->roles_all()
            ->pluck('name')->toArray();

        $this->permission_list = $this->roles_all()
            ->pluck('permissions')->flatten()
            ->pluck('key')->toArray();

        return $this;
    }
}
