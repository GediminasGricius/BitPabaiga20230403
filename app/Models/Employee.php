<?php

namespace App\Models;

use App\Fees;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = ["name", "surname"];

    public $salary=0;

    public function projects(){
        return $this->belongsToMany(Project::class);

    }

    /**
     * @return int
     */
    public function getSalary(): int
    {
        return $this->salary;
    }

    /**
     * @param int $salary
     */
    public function setSalary(int $salary): void
    {
        $this->salary = $salary;
    }

    public function gpm(){
       return ($this->salary-Fees::$NPD) * Fees::$GPM/100;
    }


}
