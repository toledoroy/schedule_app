/**
 * 
 */
const Schedule = ({  }: any) => { 
    const days: string[] = [
        'monday',
        'tuesday',
        'wednsday',
        'thursday',
        'friday',
        // 'saturday',
    ];
    const timeslots: any[] = [
        {time: '8:30', text:'MORNING'},
        {time: '10:00'},
        {time: '11:45'},
        {text:'AFTERNOON'},
        {time: '16:00'},
        {text: 'EVENING'},
    ];
    const data: any = {
        monday: [
            {
                time:'8:30-09:45',
                title:'Ashtanga Vinyasa',
                teacher:'Danielle',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa',
                teacher:'Dalit',
            },
            {
                time:'11:45-13:15',
                title:'Pilates Mobility Flow',
                teacher:'Vanessa',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Liz',
            },
        ],   
        tuesday: [
            {
                time:'8:30-09:45',
                title:'Ashtanga Led Class',
                teacher:'Rachel',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa',
                teacher:'Dalit',
            },
            {
                time:'11:45-13:15',
                title:'Gentle Vinyasa Flow',
                teacher:'Nola',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Kundalini Yoga',
                teacher:'Raj',
            },
            {
                time:'19:00-21:00',
                title:'INNERDANCE',
                teacher:'Kate',
            },
        ],
        wednsday: [
            {
                time:'8:30-09:45',
                title:'Ashtanga Vinyasa',
                teacher:'Danielle',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa Level 2',
                teacher:'Nami',
            },
            {
                time:'11:45-13:15',
                title:'Embodies Flow',
                teacher:'Laura',
            },
            {
                time:'13:30-15:30',
                title:'Befriending the Nervous System',
                teacher:'Kate',
            },
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Liz',
            },
        ],
        thursday:[
            {
                time:'8:30-09:45',
                title:'Ashtanga Let Class',
                teacher:'Rachel',
            },
            {
                time:'10:00-11:30',
                title:'Modern Vinyasa',
                teacher:'Eidan',
            },
            {
                time:'11:45-13:15',
                title:'Gentle Vinyasa Flow',
                teacher:'Nola',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Liz',
            },
        ],
        friday:[
            {
                time:'8:30-09:45',
                title:'Ashtanga Led Class',
                teacher:'Eidan',
            },
            {
                time:'10:00-11:30',
                title:'Maalaa Vinyasa Level 1',
                teacher:'Nami',
            },
            {
                time:'11:45-13:15',
                title:'Gentle Vinyasa Flow',
                teacher:'Nola',
            },
            {},
            {
                time:'16:00-17:30',
                title:'Yin Yoga',
                teacher:'Rogen',
            },
        ],
    };
    
    const styles = {
        table:{ },
        th:{},
        tr:{},
        td:{},
    
    };
    return (
        <table className="schedule_table" style={styles.table}>
            <tr>
                <th>&nbsp;</th>
                {days.map(element => <th style={styles.th}>{element}</th>)}
            </tr>

            {/* <tr><td style={styles.td}>[SLOTS]</td></tr> */}

            {timeslots.map((slot, slotIndex) => <tr style={styles.tr}>
                <td>
                    <div>{slot?.time}</div>
                    <div>{slot?.text}</div>
                </td>
                {days.map(day => <td>
                    {/* {day}, {slotIndex} */}
                    <div className="time">{data?.[day]?.[slotIndex]?.time || ''}</div>
                    <div className="title">{data?.[day]?.[slotIndex]?.title || ''}</div>
                    <div className="teacher"> {data?.[day]?.[slotIndex]?.teacher ? `with ${data[day][slotIndex].teacher}`: ''}</div>
                </td>)}
            </tr>)}
            
        </table>
    );
}


export default Schedule;
