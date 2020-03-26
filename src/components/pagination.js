import React, { Component } from "react"
import PropTypes from "prop-types"

const LEFT_PAGE = "LEFT"
const RIGHT_PAGE = "RIGHT"

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

const PaginationBlockDiv = ({ children, className }) => (
  <div
    className={`row w-8 h-8 justify-center items-center text-center ${className}`}
  >
    {children}
  </div>
)

PaginationBlockDiv.defaultProps = {
  className: "",
}

class Pagination extends Component {
  /**
   * Let's say we have 10 pages and we set pageNeighbours to 2
   * Given that the current page is 6
   * The pagination control will look like the following:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => terminal pages: first and last page(always visible)
   * [x] => represents current page
   * {...x} => represents page neighbours
   */
  fetchPageNumbers = () => {
    const totalPages = this.totalPages
    const currentPage = this.props.page
    const pageNeighbours = this.props.pageNeighbours

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = this.props.pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

      let pages = range(startPage, endPage)

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, RIGHT_PAGE]
          break
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  constructor(props) {
    super(props)

    this.totalPages = Math.ceil(props.totalRecords / props.recordsPerPage)
  }

  componentDidMount() {
    this.gotoPage(1)
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.totalPages = Math.ceil(
      nextProps.totalRecords / this.props.recordsPerPage
    )

    return true
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props

    const currentPage = Math.max(0, Math.min(page, this.totalPages))

    const paginationData = {
      currentPage,
      totalPages: this.props.totalPages,
      recordsPerPage: this.props.recordsPerPage,
      totalRecords: this.props.totalRecords,
    }

    this.setState({ currentPage }, () => onPageChanged(paginationData))
  }

  handleClick = page => e => {
    e.preventDefault()
    this.gotoPage(page)
  }

  handleMoveLeft = e => {
    e.preventDefault()
    this.gotoPage(this.state.currentPage - this.props.pageNeighbours * 2 - 1)
  }

  handleMoveRight = e => {
    e.preventDefault()
    this.gotoPage(this.state.currentPage + this.props.pageNeighbours * 2 + 1)
  }

  render() {
    //if (!this.props.totalRecords || this.totalPages === 1) return null;

    const currentPage = this.props.page
    const pages = this.fetchPageNumbers()

    return (
      <div
        className="row justify-center items center my-8"
        aria-label="Pagination"
      >
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <PaginationBlockDiv key={`left-${index}`}>
                <div>
                  <a
                    className="gray-link"
                    href="#"
                    aria-label="Previous"
                    onClick={this.handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
              </PaginationBlockDiv>
            )

          if (page === RIGHT_PAGE)
            return (
              <PaginationBlockDiv key={`right-${index}`}>
                <div>
                  <a
                    className="gray-link"
                    href="#"
                    aria-label="Next"
                    onClick={this.handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </PaginationBlockDiv>
            )

          return (
            <PaginationBlockDiv key={`current-${index}`}>
              <div>
                <a
                  className={currentPage === page ? "blue-link" : "gray-link"}
                  href="#"
                  onClick={this.handleClick(page)}
                >
                  {page}
                </a>
              </div>
            </PaginationBlockDiv>
          )
        })}
      </div>
    )
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  recordsPerPage: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
}

export default Pagination
