import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    color: '#fff',
    height: 150,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
}));

const languageTechStack = [
    { id: 1, logo: '/assets/javascript-logo.png', name: 'JavaScript' },
    { id: 2, logo: '/assets/dart-logo.png', name: 'Dart' },
    { id: 3, logo: '/assets/typescript-logo.png', name: 'TypeScript' },
];

const frontendTechstack = [
    { id: 1, logo: '/assets/react-logo.png', name: 'React js/native' },
    { id: 2, logo: '/assets/flutter-logo.png', name: 'Flutter' },
    { id: 3, logo: '/assets/expogo-logo.png', name: 'Expo Go' },
];

const webTechstack = [
    { id: 1, logo: '/assets/html-logo.png', name: 'HTML' },
    { id: 2, logo: '/assets/css-logo.png', name: 'CSS' },
    { id: 3, logo: '/assets/accessible-design-white.png', name: 'Accessible Design' },
];

const backendTechstack = [
    { id: 1, logo: '/assets/nodejs-logo.png', name: 'Node.js' },
    { id: 2, logo: '/assets/express-logo-white.png', name: 'Express' },
    { id: 3, logo: '/assets/typescript-logo.png', name: 'PSQL' },
    { id: 4, logo: '/assets/restapi-logo.png', name: 'RESTful API Design' },
];

const toolsTechstack = [
    { id: 1, logo: '/assets/git-logo.png', name: 'Git' },
    { id: 2, logo: '/assets/jest-logo.png', name: 'Jest' },
    { id: 3, logo: '/assets/netlify-logo.png', name: 'Netlify' },
    { id: 4, logo: '/assets/supabase-logo.png', name: 'Supabase' },
    { id: 5, logo: '/assets/google-api.png', name: 'Google API' },
];

const TechStack = () => {
    return (
        <section className='tech-stack-section'>
            <h1>My tech stack</h1>
            <h1>Programming Languages:</h1>
            <Box className='languages-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} justifyContent="center" >
                    {languageTechStack.map((tech) => (
                        <Grid item xs={4} key={tech.id} >
                            <Item>
                                <img src={tech.logo} alt={tech.name} style={{ maxHeight: '130px' }} />
                                <p>{tech.name}</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <h1>Frontend Technologies:</h1>
            <Box className='frontend-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} justifyContent="center" >
                    {frontendTechstack.map((tech) => (
                        <Grid item xs={4} key={tech.id} >
                            <Item>
                                <img src={tech.logo} alt={tech.name} style={{ maxHeight: '130px' }} />
                                <p>{tech.name}</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box className='web-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} justifyContent="center" >
                    {webTechstack.map((tech) => (
                        <Grid item xs={4} key={tech.id} >
                            <Item>
                                <img src={tech.logo} alt={tech.name} style={{ maxHeight: '130px' }} />
                                <p>{tech.name}</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <h1>Backend Technologies:</h1>
            <Box className='backend-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} justifyContent="center" >
                    {backendTechstack.map((tech) => (
                        <Grid item xs={4} key={tech.id} >
                            <Item>
                                <img src={tech.logo} alt={tech.name} style={{ maxHeight: '130px' }} />
                                <p>{tech.name}</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <h1>Tools and Testing:</h1>
            <Box className='tools-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} justifyContent="center" >
                    {toolsTechstack.map((tech) => (
                        <Grid item xs={4} key={tech.id} >
                            <Item>
                                <img src={tech.logo} alt={tech.name} style={{ maxHeight: '130px' }} />
                                <p>{tech.name}</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </section>
    );
};

export default TechStack