<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['logout']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function user(Request $request)
    {
        return $request->user()->fullData();
    }

    public function logout(Request $request)
    {
        if (Auth::check()) {
            //Auth::guard('web')->logout();
            Auth::logout();
        }
        return null;
    }
}
