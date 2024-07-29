<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::orderBy('id', 'Desc')->get();

        return response()->json([
            'error' => false,
            'employees' => $employees
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if ($request->birthdate > date("Y-m-d")) {
            return response()->json([
                'error' => true,
                'error_message' => 'Invalid birthdate. Birthdate cannot be in the future.'
            ]);
        }
        
        $employee = new Employee;
        $employee->user_name = $request->user_name;
        $employee->first_name = $request->first_name;
        $employee->last_name = $request->last_name;
        $employee->email = $request->email;
        $employee->birthdate = $request->birthdate;
        $employee->basic_salary = $request->basic_salary;
        $employee->status = $request->status;
        $employee->group = $request->group;
        $employee->description = $request->description;
        $employee->save();

        return response()->json([
            'error' => false,
            'message' => 'Successfully created employee'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employee::find($id);
        if(empty($employee)) {
            return response()->json([
                'error' => true,
                'error_message' => 'We could not find any user'
            ]);
        }
        return response()->json([
            'error' => false,
            'employee' => $employee
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);
        if (empty($employee)) {
            return response()->json([
                'error' => true,
                'error_message' => 'Employee is empty'
            ]);
        }

        if ($request->birthdate > date("Y-m-d")) {
            return response()->json([
                'error' => true,
                'error_message' => 'Invalid birthdate. Birthdate cannot be in the future.'
            ]);
        }

        $employee->user_name = $request->user_name;
        $employee->first_name = $request->first_name;
        $employee->last_name = $request->last_name;
        $employee->email = $request->email;
        $employee->birthdate = $request->birthdate;
        $employee->basic_salary = $request->basic_salary;
        $employee->status = $request->status;
        $employee->group = $request->group;
        $employee->description = $request->description;
        $employee->save();

        return response()->json([
            'error' => false,
            'message' => 'Successfully updated employee'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);

        if (empty($employee)) {
            return response()->json([
                'error' => true,
                'error_message' => 'Employee is Empty'
            ]);
        }

        $employee->delete();

        return response()->json([
            'error' => false,
            'message' => 'Successfully deleted employee'
        ]);
    }
}

