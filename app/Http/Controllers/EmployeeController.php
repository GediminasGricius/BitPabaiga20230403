<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Employees/Index', [
            "employees"=>Employee::with("projects")->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Employees/Create', [

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|min:3',
            'surname'=>'required|min:3',
        ],
        [
            'name'=>'Vardas yra privalomas, ne trumpesnis nei 3 simb.',
            'surname'=>'Pavardė yra privalomas, ne trumpesnis nei 3 simb.',
        ]);
        Employee::create($request->all());
        return to_route("employees.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        return inertia('Employees/Edit', [
            "employee"=>$employee
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $employee->fill($request->all());
        $employee->save();
        return to_route("employees.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();
        return to_route("employees.index");
    }
}
