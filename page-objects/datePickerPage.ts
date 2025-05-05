import { expect, Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"

export class DatePickerPage extends HelperBase{
    constructor(page: Page) {
        super(page)
    }

    async commonDatePickerDateFromToday(daysFromToday: number) {
        const datePicker = this.page.getByPlaceholder('Form Picker')
        await datePicker.click() // This is purely to open up the GUI of the date picker

        const dateToAssert = await this.selectDateInCalendar(daysFromToday)
        expect(datePicker).toHaveValue(dateToAssert)
        
    }

    async rangeDatePickerDateFromToday(startDayFromToday: number, endDayFromToday: number) {
        const rangePicker = this.page.getByPlaceholder('Range Picker')
        await rangePicker.click() // This is purely to open up the GUI of the date picker

        const startingDateToAssert = await this.selectDateInCalendar(startDayFromToday)
        const endingDateToAssert = await this.selectDateInCalendar(endDayFromToday)

        const dateToAssert = `${startingDateToAssert} - ${endingDateToAssert}`
    }

    private async selectDateInCalendar(daysFromToday: number) {
        
        const selectedMonth = this.page.locator('.day-cell.ng-star-inserted')
        
        let date = new Date()
        date.setDate(date.getDate() + daysFromToday)
        const expectedDate = date.getDate().toString()
        const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
        const expectedMonthShort = date.toLocaleString('En-US', {month: 'short'})
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`
    
        
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
        
        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }
    
        await selectedMonth.getByText(expectedDate, {exact: true}).click()
        return dateToAssert
    }
}