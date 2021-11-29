import { useEffect } from "react";
import { useState } from "react";
import faker from 'faker'

function Suggestions() {
    const [suggestions, setSuggestions] = useState ([]);

    useEffect(() => {
        const sugestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))
        setSuggestions(sugestions);
    },[])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5 ">
                <h3 className="text-sm font-bold text-gray-400">Sugerencias para ti</h3>
                <button className="text-gray-600 font-semibold">Ver todos</button>
            </div>
            {
                suggestions.map((profile) => (
                    <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img className="w-10 h-10 rounded-full  border p-[2px]"src={profile.avatar} alt=""/>
                    
                    <div className="flex-1 ml-4">
                        <h2 className="font-semiBold text-sm">{profile.username}</h2>
                        <h3 className="text-sm text-gray-400">Trabaja en {profile.company.name}</h3>
                    </div>

                    <button className="text-blue-400  text-sm">Seguir</button>

                    </div>
                ))
            }
        </div>
    )
}
export default Suggestions