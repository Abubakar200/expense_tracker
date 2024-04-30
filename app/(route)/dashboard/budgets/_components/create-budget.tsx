import { Plus } from "lucide-react";

const CreateBudget = () => {
    return ( 
        <div>
            <div className="flex flex-col items-center bg-slate-100 p-10 rounded-md border-2 border-dashed hover:shadow-md cursor-pointer">
                <Plus className="h-4 w-4"/>
                <h2>Create Budget</h2>
            </div>
        </div>
     );
}
 
export default CreateBudget;