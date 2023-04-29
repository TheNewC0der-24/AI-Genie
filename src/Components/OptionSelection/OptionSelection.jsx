import React from 'react';

import {
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from '@mui/material';

const OptionSelection = ({ options }) => {

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Typography variant='h3' align='center'>AI-Genie</Typography>
                <Grid mt={5} container spacing={2}>
                    {options.map((item) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
                                <Card sx={{ bgcolor: '#161A1D', color: '#dee2e6', border: "2px solid #161A1D", cursor: "pointer", height: "100%", '&:hover': { border: "2px solid #dee2e6" } }}>
                                    <CardContent>
                                        <Typography variant='h5' align='center'>{item.name}</Typography>
                                        <Typography mt={2} variant='body1' align='center'>{item.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default OptionSelection;