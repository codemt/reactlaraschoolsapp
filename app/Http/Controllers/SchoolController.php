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

    public function store(Request $request){


            $new_school = new Schools();
            $new_school->school_name = $request->school_name;
            $new_school->school_board = $request->school_board;
            $new_school->school_address = $request->school_address;


            $new_school->save();
        
             return response()->json('Success');


    }

    public function edit($id){



        $edit = Schools::find($id);

        return response()->json($edit);


    }



}
