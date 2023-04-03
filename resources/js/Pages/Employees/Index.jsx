import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";
import Button from "bootstrap/js/src/button";

export default function Index({employees, auth}) {
    console.log(auth);
    const employeesList=[];
    employees.forEach((employee)=>{
        employeesList.push(
            <tr key={employee.id}>
                <td>
                    {employee.name}
                </td>
                <td>
                    {employee.surname}
                </td>
                <td>
                    { (auth.user!=null && auth.user.type==1)?
                        <div>
                            <Link className="btn btn-warning "  href={ route("employees.edit",employee.id)} >Redaguoti</Link> &nbsp;
                            <button className="btn btn-danger "  onClick={ ()=>{ router.delete(route("employees.destroy",employee.id)); } }  >Redaguoti</button>
                        </div>
                     : "" }
                </td>
        </tr>)
    });
    return (
        <AppLayout>
                <div className={"col-md-12 mt-5"}>
                    <div className={"card"}>
                        <div className={"card-header"}>Puslapis</div>
                        <div className={"card-body"}>
                            <Link className="btn btn-primary "  href={ route("employees.create")} >Pridėti</Link>
                            <table className={"table"}>
                                <thead>
                                    <tr>
                                        <th>Vardas</th>
                                        <th>Pavardė</th>
                                        <th>Veiksmai</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employeesList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </AppLayout>
    );
}
