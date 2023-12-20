import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import "./Requirements.css";

const Requirements = () => {
    const [activeOption, setActiveOption] = useState('postTraining');
    const [trainingType, setTrainingType] = useState('');
    const [participantCount, setParticipantCount] = useState(0);
    const [trainingMode, setTrainingMode] = useState('');
    const [, setSelectedLocation] = useState('');
    const [experience, setExperience] = useState([0]);
    const [durationType, setDurationType] = useState('');
    const [durationCount, setDurationCount] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [currencySymbol, setCurrencySymbol] = useState('₹');
    const [minBudget, setMinBudget] = useState('');
    const [maxBudget, setMaxBudget] = useState('');
    const [availability, setAvailability] = useState('');
    const [experiencePostJob, setExperiencePostJob] = useState([0]);

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };
    const handleAvailabilityChange = (event) => {
        setAvailability(event.target.value);
    };
    const handleFileUpload = () => {
        // Implement file upload logic here
        console.log('File upload logic goes here');
    };

    const handleTrainingTypeChange = (type) => {
        setTrainingType(type);
        setParticipantCount(0);
        setDurationCount(0);
    };

    const getCurrencySymbol = (countryCode) => {
        switch (countryCode) {
            case 'IND':
                return '₹'; // Indian Rupee symbol
            case 'USA':
                return '$'; // US Dollar symbol
            case 'CAD':
                return 'CA$'; // Canadian Dollar symbol
            case 'SGD':
                return 'S$'; // Singapore Dollar symbol
            case 'AUD':
                return 'A$'; // Australian Dollar symbol
            case 'EUR':
                return '€'; // Euro symbol
            case 'GBP':
                return '£'; // British Pound symbol
            case 'JPY':
                return '¥'; // Japanese Yen symbol
            case 'CNY':
                return 'CN¥'; // Chinese Yuan symbol
            case 'AED':
                return 'د.إ'; // UAE Dirham symbol
            case 'NZD':
                return 'NZ$'; // New Zealand Dollar symbol
            case 'CHF':
                return 'CHF'; // Swiss Franc symbol
            case 'SEK':
                return 'kr'; // Swedish Krona symbol
            // Add more cases as needed
            default:
                return '';
        }
    };
    const formatCurrencyValue = (amount) => {
        if (amount === '') {
            return ''; // Return empty string if the amount is empty
        }
        // Remove any existing currency symbols before concatenating
        return `${currencySymbol}${amount.replace(currencySymbol, '')}`;
    }


    const handleCountryChange = (e) => {
        const selectedOption = e.target.value;
        setSelectedCountry(selectedOption);
        setCurrencySymbol(getCurrencySymbol(selectedOption));
    };

    const countryOptions = [
        { value: 'IND', label: 'IND' },
        { value: 'USA', label: 'USA' },
        { value: 'CAD', label: 'CAD' },
        { value: 'SGD', label: 'SGD' },
        { value: 'AUD', label: 'AUD' },
        { value: 'NZD', label: 'NZD' },
        { value: 'CHF', label: 'CHF' },
        { value: 'SEK', label: 'SEK' },
        { value: 'CNY', label: 'CNY' },
        { value: 'AED', label: 'AED' },
        { value: 'EUR', label: 'EUR' },
        { value: 'JPY', label: 'JPY' },
    ];

    const TopTopics = [
        { title: 'Photoshop' },
        { title: 'illustrator' },
        { title: 'JEE' },
        { title: 'HTML' },
        { title: 'CSS3' },
        { title: 'Mindstay' },
        { title: 'One In A billion' }
    ];

    const handleTrainingModeChange = (mode) => {
        setTrainingMode(mode);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const handleExperienceChange = (event, newValue) => {
        setExperience(newValue);
    };

    const handleDurationTypeChange = (type) => {
        setDurationType(type);
        setDurationCount(0);
    };
    const [formData, setFormData] = useState({
        companyName: '',
        // Add other form fields here
    });
    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    }
    const handleReset = () => {
        // Reset form data to initial state
        setFormData({
            companyName: '',
            // Reset other form fields here
        });
    };
    const handleSubmit = () => {
        // Implement your submit logic here using formData
        console.log('Form data submitted:', formData);
        // Add your logic to send data to the server or perform any other actions
    };

    return (
        <div className='Requirements'>
            <div className='BreadCrumbs'>
                <span className='Dashboard'> Dashboard</span>
                <span className='Require'> {' > Requirements > '}</span>
                <span className='Post_TJ'>{activeOption === 'postTraining' ? 'Post Training' : 'Post Job'}</span>
            </div>

            <div className='Post_Buttons'>
                <button
                    onClick={() => handleOptionClick('postTraining')}
                    style={{ marginRight: '10px' }}
                    className='Post_T'
                >
                    Post Training
                </button>
                <button onClick={() => handleOptionClick('postJob')} className='Post_J'>Post Job</button>
            </div>
            <div class="Content_Wrapper">
                <div className='Buttons_Content'>
                    {activeOption === 'postTraining' && (
                        <div className='Post_Training_content'>
                            <div div className='Company'>
                                <p>Company Name</p>
                                <input type="text" placeholder='Company Name / Organization Name / College Name'
                                    value={formData.companyName}
                                    onChange={(e) => handleInputChange('companyName', e.target.value)} />
                            </div>
                            <div className='Technology'>
                                <p>Technology (Training topics)</p>
                                <Autocomplete
                                    multiple
                                    id="fixed-tags-demo"
                                    options={TopTopics}
                                    getOptionLabel={(option) => option.title}
                                    renderTags={(tagValue, getTagProps) =>
                                        tagValue.map((option, index) => (
                                            <Chip
                                                label={option.title}
                                                {...getTagProps({ index })}
                                                sx={{
                                                    color: 'rgba(138, 138, 138, 0.50)',
                                                    fontFamily: 'Poppins',
                                                    fontSize: '0.825rem',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    lineHeight: 'normal',
                                                    background: 'rgba(138, 138, 138, 0.20)'
                                                }}
                                            />
                                        ))
                                    }
                                    className='Multi_S_I'
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </div>
                            <div className='Type_Of_Training'>
                                <p>Type Of Training</p>
                                <div className='RadioTOT'>
                                    <label>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="Corporate Training"
                                            checked={trainingType === 'Corporate Training'}
                                            onChange={() => handleTrainingTypeChange('Corporate Training')}
                                        />
                                        Corporate Training
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="College Training"
                                            checked={trainingType === 'College Training'}
                                            onChange={() => handleTrainingTypeChange('College Training')}
                                        />
                                        College training
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="Individual"
                                            checked={trainingType === 'Individual'}
                                            onChange={() => handleTrainingTypeChange('Individual')}
                                        />
                                        Individual
                                    </label>
                                </div>
                                {trainingType === 'Corporate Training' && (
                                    <div className="ParticipantCount">
                                        <h5>Select No Of Participants In Corporate Training</h5>
                                        <div className='RadioTOT_Count'>
                                            <button onClick={() => setParticipantCount(participantCount - 1)}>-</button>
                                            <span >{participantCount} Participants </span>
                                            <button onClick={() => setParticipantCount(participantCount + 1)}>+</button>
                                        </div>
                                    </div>
                                )}
                                {trainingType === 'College Training' && (
                                    <div className="ParticipantCount">
                                        <h5>Select No Of Participants In College Training</h5>
                                        <div className='RadioTOT_Count'>
                                            <button onClick={() => setParticipantCount(participantCount - 1)}>-</button>
                                            <span >{participantCount} Participants </span>
                                            <button onClick={() => setParticipantCount(participantCount + 1)}>+</button>
                                        </div>
                                    </div>
                                )}
                                {trainingType === 'Individual' && (
                                    <div className="ParticipantCount">
                                        <h5>Select No Of Participants In Individual</h5>
                                        <div className='RadioTOT_Count'>
                                            <button onClick={() => setParticipantCount(participantCount - 1)}>-</button>
                                            <span >{participantCount} Participants </span>
                                            <button onClick={() => setParticipantCount(participantCount + 1)}>+</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='Mode_Of_Training'>
                                <p>Mode Of Training</p>
                                <div className='Radio_MOT'>
                                    <label>
                                        <input
                                            type="radio"
                                            name="trainingMode"
                                            value="online"
                                            checked={trainingMode === 'online'}
                                            onChange={() => handleTrainingModeChange('online')}
                                        />
                                        Online
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="trainingMode"
                                            value="offline"
                                            checked={trainingMode === 'offline'}
                                            onChange={() => handleTrainingModeChange('offline')}
                                        />
                                        Offline
                                    </label>
                                </div>
                                {trainingMode === 'offline' && (
                                    <div className="SelectLocation">
                                        <label><h5>Your Location</h5></label>
                                        <select onChange={(e) => handleLocationChange(e.target.value)}>
                                            <option value="">Location</option>
                                            <option value="usa">United States</option>
                                            <option value="canada">Canada</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="australia">Australia</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                            <div className='Select_Experience'>
                                <p>Select Experience</p>
                                <h5>Slide To Set Your Experience</h5>
                                <Box sx={{ width: "40rem", marginTop: '3rem', paddingLeft: '1rem' }}>
                                    <Slider
                                        value={experience}
                                        onChange={handleExperienceChange}
                                        min={0}
                                        max={50}
                                        aria-label="Experience Range"
                                        valueLabelDisplay="on"
                                        valueLabelFormat={(value) => `${value} years`}
                                        sx={{
                                            '& .MuiSlider-valueLabel': {
                                                background: '#FFF',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: '#2676C2',
                                                fontFamily: 'Poppins',
                                                fontSize: '0.855rem',
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                lineHeight: 'normal',
                                                border: '2px solid #2676C2',
                                            }
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className='Duration_Of_Time'>
                                <p>Duration Of Time</p>
                                <div className='Radio_Duration'>
                                    <label>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="hour"
                                            checked={durationType === 'hour'}
                                            onChange={() => handleDurationTypeChange('hour')}
                                        />
                                        Hour
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="day"
                                            checked={durationType === 'day'}
                                            onChange={() => handleDurationTypeChange('day')}
                                        />
                                        Day
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="month"
                                            checked={durationType === 'month'}
                                            onChange={() => handleDurationTypeChange('month')}
                                        />
                                        Month
                                    </label>
                                </div>
                                {durationType === 'hour' && (
                                    <div className="DurationCount">
                                        <h5>Select No Of Hours</h5>
                                        <div className='Radio_Duration_Count'>
                                            <button onClick={() => setDurationCount(durationCount - 1)}>-</button>
                                            <span >{durationCount} Hour </span>
                                            <button onClick={() => setDurationCount(durationCount + 1)}>+</button>
                                        </div>
                                    </div>
                                )}
                                {durationType === 'day' && (
                                    <div className="DurationCount">
                                        <h5>Select No Of Days</h5>
                                        <div className='Radio_Duration_Count'>
                                            <button onClick={() => setDurationCount(durationCount - 1)}>-</button>
                                            <span >{durationCount} Days </span>
                                            <button onClick={() => setDurationCount(durationCount + 1)}>+</button>
                                        </div>
                                    </div>
                                )}
                                {durationType === 'month' && (
                                    <div className="DurationCount">
                                        <h5>Select No Of Months</h5>
                                        <div className='Radio_Duration_Count'>
                                            <button onClick={() => setDurationCount(durationCount - 1)}>-</button>
                                            <span >{durationCount} Months </span>
                                            <button onClick={() => setDurationCount(durationCount + 1)}>+</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='Budgets'>
                                <p>Budgets</p>
                                <span className='Budget_MM'>
                                    <select onChange={handleCountryChange} value={selectedCountry}>
                                        {/* <option value="">Select a country</option> */}
                                        {countryOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        placeholder={`Min 100 `}
                                        value={formatCurrencyValue(minBudget)}
                                        onChange={(e) => setMinBudget(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder={`Max 9999`}
                                        value={formatCurrencyValue(maxBudget)}
                                        onChange={(e) => setMaxBudget(e.target.value)}
                                    />
                                </span>
                            </div>
                            <div className='TOC'>
                                <p>Table Of Content (TOC)</p>

                                <div className='TOC_Radio'>
                                    <label>
                                        <input
                                            type='radio'
                                            value='available'
                                            checked={availability === 'available'}
                                            onChange={handleAvailabilityChange}
                                        />
                                        Available
                                    </label>

                                    <label>
                                        <input
                                            type='radio'
                                            value='unavailable'
                                            checked={availability === 'unavailable'}
                                            onChange={handleAvailabilityChange}
                                        />
                                        Unavailable
                                    </label>
                                </div>
                                {availability === 'available' && (
                                    <div className='UPLOADFILE'>
                                        <span className='For_Align_Upload'>
                                            <h4>Select File</h4>
                                            <FileUploadOutlinedIcon sx={{ color: '#2676C2', fontSize: '2.2rem' }} />
                                        </span>
                                        <input type='file' onChange={handleFileUpload} />
                                    </div>
                                )}
                            </div>
                            <div className='Training_Dates'>
                                <p>Training Dates</p>
                                <span></span>
                            </div>
                            {activeOption === 'postTraining' && (
                                <div className='Post_Button'>
                                    <button onClick={handleReset} style={{ marginRight: '10px' }} className='Reset_Btn'>
                                        <p>Reset</p>
                                    </button>
                                    <button onClick={handleSubmit} className='Submit_Btn'>
                                        <p>SUBMIT</p>
                                    </button>
                                </div>
                            )}
                        </div>
                    )
                    }

                    {
                        activeOption === 'postJob' && (
                            <div className='Post_Job_Content'>
                                <div className='Content_Title' ><p>Job Title</p><input type="text" placeholder='Enter Job title' /></div>
                                <div className='Content_Title' ><p>Job Description</p><input type="text" placeholder='Enter Job Description' /></div>
                                <div className='Content_Title' ><p>Qualifications</p><input type="text" placeholder='Select Your Qualification' /></div>
                                <div className='Content_Title' ><p>Skills</p><input type="text" placeholder='Enter What Kind OF Skills You Want' /></div>
                                <div className='Select_Experience'>
                                    <p>Select Experience</p>
                                    <h5>Slide To Set Your Experience</h5>
                                    <Box sx={{ width: "40rem", marginTop: '3rem', paddingLeft: '1rem' }}>
                                        <Slider
                                            value={experiencePostJob}
                                            onChange={(event, newValue) => setExperiencePostJob(newValue)}
                                            min={0}
                                            max={50}
                                            aria-label="Experience Range"
                                            valueLabelDisplay="on"
                                            valueLabelFormat={(value) => `${value} years`}
                                            sx={{
                                                '& .MuiSlider-valueLabel': {
                                                    background: '#FFF',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    color: '#2676C2',
                                                    fontFamily: 'Poppins',
                                                    fontSize: '0.855rem',
                                                    fontStyle: 'normal',
                                                    fontWeight: 'bold',
                                                    lineHeight: 'normal',
                                                    border: '2px solid #2676C2',
                                                }
                                            }}
                                        />
                                    </Box>
                                </div>
                                <div className='Content_Title' ><p>Loaction</p><input type="text" placeholder='Enter Your Location' /></div>
                                <div className='Content_Title' ><p>Salary & Benefits</p><span><input type="text" placeholder='Enter Salary Details' style={{ width: '25%' }} /><input type="text" placeholder='Enter Benefits' style={{ width: '45%' }} /></span></div>
                                <div className='Content_Title' ><p>Company Overview</p><input type="text" placeholder='Enter Job Description' /></div>
                                {activeOption === 'postJob' && (
                                    <div className='Post_Button'>
                                        <button onClick={handleReset} style={{ marginRight: '10px' }} className='Reset_Btn'>
                                            Reset
                                        </button>
                                        <button onClick={handleSubmit} className='Submit_Btn'>
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>
            </div >
        </div >
    );
};

export default Requirements;
