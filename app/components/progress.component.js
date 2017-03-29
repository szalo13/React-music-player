import React from 'react';

class Progress extends React.Component {
    
    render(){
        
        return(
        
            <div className="progress">
                
                {/*Elapsed Time */}
                <span className="player__time-elapsed">{this.props.elapsed}</span>
                {/*Progress Bar */}
                <progress 
                    value={this.props.position}
                    max="1"></progress>
                {/* Total time */}
                <span className="player__time-total">{this.props.total}</span>
            </div>
        )
    }
}

export default Progress