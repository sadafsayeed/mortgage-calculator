import React from 'react'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';


const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, top_num }) => {
    return (
        <Stack my={1.4}>
            <Stack gap={1} direction="column">
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="h5">{unit}{top_num}</Typography>
            </Stack>
            <Slider defaultValue={defaultValue}
                min={min}
                max={max}
                aria-label="Default"
                valueLabelDisplay="auto"
                marks
                step={step}
                onChange={onChange}
                value={value}
            />
            <Stack direction="row" justifyContent="space-between"> 
                <Typography variant="caption" color="text.secondary">{unit}{min}</Typography>
                <Typography variant="caption" color="text.secondary">{unit}{max}</Typography>
            </Stack>
        </Stack>
    )
}

export default SliderComponent