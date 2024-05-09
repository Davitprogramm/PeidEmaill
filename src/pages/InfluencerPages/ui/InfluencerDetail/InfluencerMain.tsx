import { Influencer, influencersData } from "entities/Influencers/ui/Influencers_data";
import { memo, useState } from "react"
import { BiPencil } from "react-icons/bi";
import InfluencerData from "./InfluencerData";

export interface Register {
    money: string,
    day: string,
}

export const RegisterData: Register[] = [
    
]
export const InfluencerMain = () => {





    const currencyOptions = [
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
        // Add other currencies as needed
    ];

    // Define the options for the second dropdown when USD is selected
    const usdNotesOptions = [
        { value: '20USD', label: '20$' },
        { value: '30USD', label: '30$' },
        { value: '50USD', label: '50$' },
        { value: '100USD', label: '100$' }
    ];

    // Define the options for the second dropdown when EUR is selected
    const eurNotesOptions = [
        { value: '10€', label: '10€' },
        { value: '20€', label: '20€' },
        { value: '50€', label: '50€' },
        { value: '80€', label: '80€' }
        // Add other EUR options as needed
    ];

    // Define the state for selected currency and note
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [selectedNote, setSelectedNote] = useState('');
    const [selectedDayRange, setSelectedDayRange] = useState("7 day");
    const [registerData, setRegisterData] = useState<Register[]>([]);
    const userName = "exampleUser";
    const profession = "Influencer";
    const charity = "Charity Org";
    const receivedMessages = 100;
    const responseRate = "80%";
    const responseTime = "1 hour";
    const image = "path_to_image.png";
    // Function to handle changes in the first dropdown
    const handleCurrencyChange = (event: any) => {
        setSelectedCurrency(event.target.value);
        // Reset the second dropdown value when the currency changes
        setSelectedNote('');
    };

    // Function to handle changes in the second dropdown
    const handleNoteChange = (event: any) => {
        setSelectedNote(event.target.value);
    };

    const handleDayChange = (event: any) => {
        setSelectedDayRange(event.target.value);
    };

    // Determine which options to display in the second dropdown based on the selected currency
    const secondDropdownOptions =
        selectedCurrency === 'USD' ? usdNotesOptions : selectedCurrency === 'EUR' ? eurNotesOptions : [];



    // }
    const addRegisterData = () => {
        const newRegister: Register = {
            money: selectedNote,
            day: `1 - ${selectedDayRange}` // This creates a day range string, e.g. "1 - 7 day"
        };
        console.log(newRegister);
        console.log(RegisterData);
        RegisterData.push(newRegister)
        setRegisterData([...registerData, newRegister]); // Add the new register to the array

    };
    return (
        <div className="Main">
            <div className="main_up">
                <div className="main_title">Set up free for message*</div>
                <div className="main_title">Reply time*</div>
            </div>
            <div className="main_select">
                <div className="SetUp_select">
                    <div>
                        <label>
                            <select value={selectedCurrency} onChange={handleCurrencyChange}>
                                <option></option>
                                {currencyOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        {selectedCurrency && (
                            <label>
                                <select value={selectedNote} onChange={handleNoteChange}>
                                    <option></option>
                                    {secondDropdownOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        )}
                    </div>

                </div>
                <div className="Reply_select">
                    <div>
                        <select>
                            <option>1 day</option>
                        </select>
                    </div>
                    <div className="main_to">
                        To
                    </div>
                    <div>
                        <select onChange={handleDayChange}>
                            <option>5 day</option>
                            <option>6 day</option>
                            <option selected>7 day</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="main_down">
                <div>
                    <div className="down_divs">
                        <div className="main_title_down">Charity Organization</div>
                        <div className="icons_center"><p className="down_p">www.globalgiving.org</p> <BiPencil className="down_icon" /></div>
                    </div>
                    <div className="down_divs">
                        <div className="main_title_down">Phone Number*</div>
                        <div className="icons_center"><p className="down_p">+374 91 123 456</p> <BiPencil className="down_icon" /></div>
                    </div>
                    <div className="down_divs">
                        <div className="main_title_down">Region*</div>
                        <div className="icons_center"><p className="down_p">Yerevan</p> <BiPencil className="down_icon" /></div>
                    </div>
                </div>
                <div className="down_div2">
                    <div className="down_divs">
                        <div className="main_title_down">Socila network</div>
                        <div className="icons_center"><p className="down_p">instagram</p></div>
                    </div>
                    <div className="down_divs">
                        <div className="main_title_down">Nickname</div>
                        <div className="icons_center"><p className="down_p">@Valodik</p></div>
                    </div>
                </div>
                <button className="register_button" onClick={addRegisterData}>Submit</button>
            </div>
        </div>
    )
}



export default InfluencerMain