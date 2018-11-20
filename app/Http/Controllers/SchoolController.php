<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Schools;
class SchoolController extends Controller
{
    //
    public function index(){

            $all_schools = Schools::all();


            return response()->json($all_schools);


    }
}
