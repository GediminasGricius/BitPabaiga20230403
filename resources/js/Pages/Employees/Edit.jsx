import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";

export default function Edit({employee}) {
    const {data, setData, put, errors}=useForm(employee);

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.id]:event.target.value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        put(route("employees.update", employee.id));
    }

    return (
        <AppLayout>
            <div className={"col-md-12 mt-5"}>
                <div className={"card"}>
                    <div className={"card-header"}>Darbuotojo redagavimas</div>
                    <div className={"card-body"}>
                        <form onSubmit={handleSubmit}>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Vardas:</label>
                                <input type={"text"} className={"form-control "+(errors.name!=null?" is-invalid":"")} id={"name"} onChange={handleChange} value={data.name}/>
                                <div className={"invalid-feedback"}>{errors.name}</div>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Pavardė:</label>
                                <input type={"text"} className={"form-control "+(errors.surname!=null?" is-invalid":"")} id={"surname"} onChange={handleChange} value={data.surname}/>
                                <div className={"invalid-feedback"}>{errors.surname}</div>
                            </div>
                            <button type={"submit"} className={"btn btn-success"}>Pridėti</button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
