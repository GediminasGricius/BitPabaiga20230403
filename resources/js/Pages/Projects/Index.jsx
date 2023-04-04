import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";
import Button from "bootstrap/js/src/button";

export default function Index({projects, auth}) {
    console.log(auth);
    const projectList=[];
    projects.forEach((project)=>{
        projectList.push(
            <tr key={project.id}>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.price}
                </td>
                <td>
                    { (auth.user!=null && auth.user.type==1) ?
                        <div>
                            <Link className="btn btn-warning "  href={ route("projects.edit",project.id)} >Redaguoti</Link> &nbsp;
                            <button className="btn btn-danger "  onClick={ ()=>{ router.delete(route("projects.destroy",project.id)); } }  >Redaguoti</button> &nbsp;
                            <Link className={"btn btn-success"} href={route("projects.addEmployees",project.id)}>Darbuotojai</Link>
                        </div>
                    :
                    <div>
                        <Link className="btn btn-warning "  href={ route("projects.edit",project.id)} >Redaguoti</Link> &nbsp;
                        <button className="btn btn-danger "  onClick={ ()=>{ router.delete(route("projects.destroy",project.id)); } }  >Redaguoti</button> &nbsp;

                    </div>
                    }
                </td>
        </tr>)
    });
    return (
        <AppLayout>
                <div className={"col-md-12 mt-5"}>
                    <div className={"card"}>
                        <div className={"card-header"}>Projektų sąraša</div>
                        <div className={"card-body"}>
                            <Link className="btn btn-primary "  href={ route("projects.create")} >Pridėti</Link>
                            <table className={"table"}>
                                <thead>
                                    <tr>
                                        <th>Pavadinimas</th>
                                        <th>Kaina</th>
                                        <th>Veiksmai</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projectList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </AppLayout>
    );
}
