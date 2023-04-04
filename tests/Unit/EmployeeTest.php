<?php

namespace Tests\Unit;

use App\Models\Employee;
use PHPUnit\Framework\TestCase;

class EmployeeTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $this->assertTrue(true);
    }

    public function test_set_name(): void{
        $employee=new Employee();
        $employee->name="Jonas";
        $this->assertEquals("Jonas", $employee->name);
    }

    public function test_gpm_calculation(): void
    {
        $employee=new Employee();
        $employee->setSalary(1000);
        $this->assertEquals( 140, $employee->gpm());
    }
}
