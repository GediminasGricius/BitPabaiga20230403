import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";

export default function AddEmployees({project, employees}) {
    const {data, setData, post, errors}=useForm({
        employee_id:""
    });

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.id]:event.target.value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        post(route("projects.storeEmployees", project.id));
    }

    const employeesList=[];
    employeesList.push(<option key={0} value={""}></option>);
    employees.forEach((employee)=>{
        employeesList.push(
            <option key={employee.id} value={employee.id}>{employee.name} {employee.surname}</option>
        )
    })
    console.log(project);
    const pEmployeesList=[];

    project.employees.forEach((employee)=>{
        pEmployeesList.push(
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>
                    <Link href={route("projects.removeEmployee",[project.id,employee.id])} className={"btn btn-danger"}>Ištrinti</Link>
                </td>
            </tr>
        );
    });

    return (
        <AppLayout>
                <div className={"col-md-12 mt-5"}>
                    <div className={"card"}>
                        <div className={"card-header"}>Pridėti naują projektą</div>
                        <div className={"card-body"}>
                            <h3>Projekte dirbantys asmenys</h3>
                            <table className={"table"}>
                                <thead>
                                <tr>
                                    <td>Vardas</td>
                                    <td>Pavardė</td>
                                    <td></td>
                                </tr>
                                </thead>
                                <tbody>
                                {pEmployeesList}
                                </tbody>
                            </table>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className={"mb-3"}>
                                    <label className={"form-label"}>Priskirti naują darbuotoją:</label>
                                    <select className={"form-select" +(errors.employee_id!=null?" is-invalid":"")} id={"employee_id"} onChange={handleChange} value={data.employee_id}>
                                        {employeesList}
                                    </select>
                                    <div className={"invalid-feedback"}>{errors.employee_id}</div>


                                </div>

                                <button type={"submit"} className={"btn btn-success"}>Pridėti</button>
                            </form>
                        </div>
                    </div>
                </div>
        </AppLayout>
    );
}
