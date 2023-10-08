import moment from "moment";

export const timeHelper: any = {    
    /// Get week number
    currentWeek: (currentDate = new Date()) => moment(currentDate).isoWeek(),
    
    /// Get Week Day's Date
    getDayOfWeek: (dayName: string = "monday", weekNum: number) => moment().day(dayName).week(weekNum),    
};