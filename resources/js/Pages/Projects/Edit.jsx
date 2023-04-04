import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";

export default function Edit({project}) {
    const {data, setData, put, errors}=useForm(project);

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.id]:event.target.value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        put(route("projects.update", project.id));
    }

    return (
        <AppLayout>
            <div className={"col-md-12 mt-5"}>
                <div className={"card"}>
                    <div className={"card-header"}>Projekto redagavimas</div>
                    <div className={"card-body"}>
                        <form onSubmit={handleSubmit}>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Pavadinimas:</label>
                                <input type={"text"} className={"form-control "+(errors.name!=null?" is-invalid":"")} id={"name"} onChange={handleChange} value={data.name}/>
                                <div className={"invalid-feedback"}>{errors.name}</div>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Kaina:</label>
                                <input type={"text"} className={"form-control "+(errors.price!=null?" is-invalid":"")} id={"price"} onChange={handleChange} value={data.price}/>
                                <div className={"invalid-feedback"}>{errors.price}</div>
                            </div>
                            <button type={"submit"} className={"btn btn-success"}>Išsaugoti</button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
