import React, { useState } from "react"
import SearchBar from "../search/searchbar"
import Collapsible from "../collapsible"
//import SideBar from "../sidebar/sidebar"
import Column from "../column"
import DayPicker, { DateUtils } from "react-day-picker"
import "../../../node_modules/react-day-picker/lib/style.css"
import "./calendar.scss"
import MainColumn from "../maincolumn"
import SideColumn from "../sidecolumn"
import CalSearchResults from "./calsearchresults"

const EMPTY_QUERY = ""

const CalSearch = ({ allCalEvents }) => {
  const [page, setPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(20)
  const [selectedDays, setSelectedDays] = useState([])

  // const handleInputChange = e => {
  //   const q = e.target.value
  //   let ret = []

  //   for (let event of allCalEvents) {
  //     if (event.frontmatter.title.toLowerCase().includes(q.toLowerCase())) {
  //       ret.push(event)
  //     }
  //   }

  //   // update state according to the latest query and results
  //   setQuery(q)
  //   setFilteredCalEvents(ret)
  //   setPage(1)
  // }

  const handleDayClick = (day, { selected }) => {
    // const { selectedDays } = this.state;
    // if (selected) {
    //   const selectedIndex = selectedDays.findIndex(selectedDay =>
    //     DateUtils.isSameDay(selectedDay, day)
    //   );
    //   selectedDays.splice(selectedIndex, 1);
    // } else {
    //   selectedDays.push(day);
    // }

    setSelectedDays(selected ? [] : [day])
  }

  const onPageChanged = data => {
    const { currentPage } = data
    setPage(currentPage)
  }

  let dayFilteredEvents = []

  if (selectedDays.length > 0) {
    dayFilteredEvents = allCalEvents.filter(e => {
      return DateUtils.isSameDay(selectedDays[0], e.start)
    })
  } else {
    const now = Date.now()

    dayFilteredEvents = allCalEvents.filter(e => {
      return e.start >= now
    })
  }

  const offset = (page - 1) * recordsPerPage
  let pagedEvents = dayFilteredEvents.slice(offset, offset + recordsPerPage)

  return (
    <Column>
      {/* <SmallColumn>
        <SearchBar
          handleInputChange={handleInputChange}
          placeholder="Type to find events..."
        />
        <div className="text-center">
          <DayPicker selectedDays={selectedDays} onDayClick={handleDayClick} />
        </div>
      </SmallColumn> */}
      <MainColumn>
        <CalSearchResults
          events={dayFilteredEvents}
          pagedEvents={pagedEvents}
          page={page}
          recordsPerPage={recordsPerPage}
          onPageChanged={onPageChanged}
        />
      </MainColumn>
      <SideColumn>
        {/* <SideBar> */}
        {/* <SearchBar
          handleInputChange={handleInputChange}
          placeholder="Type to find events..."
        /> */}
        {/* <Collapsible title="Filter By Date" height="auto"> */}
        <div className="text-center">
          <DayPicker selectedDays={selectedDays} onDayClick={handleDayClick} />
        </div>
        {/* </Collapsible> */}
        {/* </SideBar> */}
      </SideColumn>
    </Column>
  )
}

CalSearch.defaultProps = {
  showLabLink: true,
}

export default CalSearch
