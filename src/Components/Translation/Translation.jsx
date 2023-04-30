import React from 'react'

import moment from 'moment';

import {
    Container,
    Box,
    CssBaseline,
    TextField,
    Button,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Avatar
} from '@mui/material';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import noPreview from '../../assets/noPreview.svg';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Translation({ doStuff, input, setInput, result, handleBack }) {

    const handleClearInput = () => {
        setInput('');
    }

    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container sx={{ mt: 5 }} maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card sx={{
                            bgcolor: '#161A1D',
                            color: '#dee2e6',
                            border: "2px solid #161A1D",
                            height: "100%",
                        }}>
                            <CardHeader
                                avatar={
                                    <Avatar>
                                        <PermIdentityIcon />
                                    </Avatar>
                                }
                                title="Human"
                                subheader={currentDate}
                            />
                            <CardContent>
                                <TextField
                                    fullWidth
                                    placeholder='Type a phrase or sentence here...'
                                    multiline
                                    minRows={10}
                                    maxRows={15}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#dee2e6",
                                            },
                                        },
                                        "& .MuiFormLabel-root.Mui-focused": {
                                            color: "#dee2e6",
                                        },
                                    }}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />

                                <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                                    <Box sx={{ display: "flex", gap: '0.5rem' }}>
                                        <Button
                                            variant='outlined'
                                            sx={{ borderColor: "#dee2e6", color: "#dee2e6", '&:hover': { borderColor: '#dee2e6' } }}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant='contained'
                                            sx={{ bgcolor: "#dee2e6", '&:hover': { bgcolor: '#dee2e6' } }}
                                            disabled={input.length === 0}
                                            onClick={doStuff}
                                        >
                                            Do Your Stuff!
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            variant='contained'
                                            color='warning'
                                            disabled={input.length === 0}
                                            onClick={handleClearInput}
                                        >
                                            Clear
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Card sx={{
                            bgcolor: '#161A1D',
                            color: '#dee2e6',
                            border: "2px solid #161A1D",
                            height: "100%",
                        }}>
                            <CardHeader
                                avatar={
                                    <Avatar>
                                        <SmartToyIcon />
                                    </Avatar>
                                }
                                title="Bot"
                                subheader={currentDate}
                            />
                            <CardContent>
                                {
                                    result.length > 0 ? (
                                        <Typography variant='subtitle1' align='center'>{result}</Typography>
                                    ) : (
                                        <Box>
                                            <Typography mb={5} variant='h5' align='center'>Nothing to Show !!</Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', margin: "auto" }}>
                                                <img src={noPreview} width={200} alt="noPreview" />
                                            </Box>
                                        </Box>
                                    )
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider >
    )
}

export default Translation;