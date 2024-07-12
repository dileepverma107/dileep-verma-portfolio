import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const SkeletonCard = () => {
    return (
        <Card
            sx={{
                backgroundColor: "#292829",
                width: { xs: "100%", sm: "571px" },
                height: { xs: "auto", sm: "334px" },
                position: "relative",
                padding: { xs: 2, sm: 0 },
            }}
        >
            <CardContent>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box sx={{ backgroundColor: '#555', height: '40px', width: '40px', borderRadius: '50%' }}></Box>
                    <Box sx={{ backgroundColor: '#555', height: '20px', width: '200px', borderRadius: '4px' }}></Box>
                </Box>
                <Box sx={{ backgroundColor: '#555', height: '1px', width: '100%', marginTop: '16px' }}></Box>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    mt={2}
                >
                    <Box
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box sx={{ backgroundColor: '#555', height: '100px', width: '100px', borderRadius: '50%' }}></Box>
                    </Box>
                    <Box
                        flex="1"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Box sx={{ backgroundColor: '#555', height: '20px', width: '200px', borderRadius: '4px', marginTop: '8px' }}></Box>
                        <Box sx={{ backgroundColor: '#555', height: '20px', width: '200px', borderRadius: '4px', marginTop: '8px' }}></Box>
                        <Box sx={{ backgroundColor: '#555', height: '20px', width: '200px', borderRadius: '4px', marginTop: '8px' }}></Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SkeletonCard;
