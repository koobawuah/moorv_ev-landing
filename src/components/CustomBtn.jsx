import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

const CustomBtn = (props) => {
    
    return ( 
        <div>
                <button className={props.isSolid===true?`px-5 py-2 font-nomral text-white bg-purple-700 rounded-full`:`px-5 py-2 text-white rounded-full border border-white font-normal`}>
                    {props.value}
                    <ArrowNarrowRightIcon className="inline-block w-6 h-6 ml-3"/>
                </button>
        </div>
    )
}

export default CustomBtn;
