<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Fist' );
});

Route::get('/dashboard', function () {
    return Inertia::render('Fist',
    [
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource("employees", EmployeeController::class);
Route::resource("projects", ProjectController::class);

Route::get("/projects/{id}/add_employees", [ProjectController::class, "addEmployees"])->name("projects.addEmployees");
Route::post("/projects/{id}/add_employees", [ProjectController::class, "storeEmployees"])->name("projects.storeEmployees");
Route::get("/projects/{projectId}/remove_employee/{employeeId}", [ProjectController::class, "removeEmployee"])->name("projects.removeEmployee");
require __DIR__.'/auth.php';
