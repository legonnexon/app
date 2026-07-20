import TriangleLeftFillIcon from '@iconify-react/gravity-ui/triangle-left-fill';
export default function CardSection() {
    return (
      <div className="cards-section">
        <div className="y-div-start">
          <div className="card-1">
            <div className="empty-space"></div>          
          </div>
          <div className="card-2">
            <div className="divisa-middle-card"></div>
            <div className="indicator">
              <TriangleLeftFillIcon height="1.2em" />
            </div>          
          </div>
          <div className="card-3">
            <div className="empty-space"></div>    
          </div>
        </div>
      </div>
    )
}

