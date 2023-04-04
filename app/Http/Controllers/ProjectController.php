<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Projects/Index', [
            "projects"=>Project::with("employees")->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Projects/Create',[
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Project::create($request->all());
        return to_route("projects.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return inertia('Projects/Edit', [
            "project"=>$project
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $project->fill($request->all());
        $project->save();
        return to_route("projects.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return to_route("projects.index");
    }

    public function addEmployees($id){
        return inertia("Projects/AddEmployees",[
           "project"=>Project::where('id',$id)->with('employees')->first(),
            "employees"=>Employee::all()
        ]);
    }

    public function storeEmployees($id, Request $request){
        $project=Project::find($id);
        $project->employees()->detach($request->employee_id);
        $project->employees()->attach($request->employee_id);
        return to_route("projects.addEmployees", $id);
    }

    public function removeEmployee($projectId,$employeeId){
        $project=Project::find($projectId);
        $project->employees()->detach($employeeId);
        return to_route("projects.addEmployees", $projectId);
    }
}
