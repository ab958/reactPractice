import * as React from 'react';

export default function BasicCard() {
    return (
        // <Card sx={{ minWidth: 275 }}>
        //   <CardContent>
        //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //       Word of the Day
        //     </Typography>
        //     <Typography variant="h5" component="div">
        //       be{bull}nev{bull}o{bull}lent
        //     </Typography>
        //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //       adjective
        //     </Typography>
        //     <Typography variant="body2">
        //       well meaning and kindly.
        //       <br />
        //       {'"a benevolent smile"'}
        //     </Typography>
        //   </CardContent>
        //   <CardActions>
        //     <Button size="small">Learn More</Button>
        //   </CardActions>
        // </Card>
        <div className="card-category-1">
            <div className="basic-card basic-card-dark">
                <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className="card-link">
                    <a href="#" title="Read Full"><span>Read Full</span></a>
                </div>
            </div>
        </div>
    );
}
