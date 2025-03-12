import React from 'react'

function Loader() {
    return (
        <div class="text-center mt-5">
            <h4 className=''>Loading &nbsp;
                <div class="spinner-grow spinner-grow-sm me-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm me-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm me-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm me-2" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </h4>
        </div>
    )
}

export default Loader