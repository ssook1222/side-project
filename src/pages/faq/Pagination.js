import { Button } from 'react-bootstrap';
import './Pagination.css'

function Pagination({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit);

    return (
        <div className = "pageBtn">
            <Button id = "btnId" onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
            </Button>
            {Array(numPages)
            .fill()
            .map((_, i) => (
                <Button id = "btnId"
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
                >
                {i + 1}
                </Button>
            ))}
            <Button id = "btnId" onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
            </Button>
        </div>
    )
}

export default Pagination;