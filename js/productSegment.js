$(function() {
    var products = [{
        value: 'Product 1 ',
        data: 'Product Segment 1 ',
        data3: 'Tech Sales Manager 1',
        data4: 'Tech Sales Manager Phone',
        data5: 'Operations Manager 1',
        data6: 'Operations Manager Phone'
    }, {
        value: 'Product 2 ',
        data: 'Product Segment 2 ',
        data3: 'Tech Sales Manager 2',
        data4: 'Tech Sales Manager Phone',
        data5: 'Operations Manager 2',
        data6: 'Operations Manager Phone'
    }, {
        value: 'Capillary Injection ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Gas Lift ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Corod ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Flush By Units ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Horizontal Pumping Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Hydraulic Lift Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Multiphase Pumps ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Plunger Lift Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Hydraulic Lift Controls ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Industrial Multiplex Pumps ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Flow Meters ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Surface Accessories ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Surface Acquisition Sys ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Tooling ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Wellhead ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Data Acquisition Equip ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Production Automation ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Production Optim General ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Gas Lift Automation ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Hydraulic Lift Automation ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'PCP Automation & Optimization ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'iMAXX ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Gasification ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Produced Water Treatment ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Steam Generation ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Process Equipment ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'PCP Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'PCP Systems General ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Pump Accessories ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Pump Drives ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Pump Rotors ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Pump Stators ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Rotors & Stators Other ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Artificial-Lift Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Automation and Control ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Capillary Technologies ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'COROD Continuous Rod ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Gas Lift Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Jet Pump Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Hydraulic Piston Pumps Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Plunger Lift ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Progressing Cavity Pump Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Pumping Units ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Sucker Rods ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Subsurface Rod Pumps ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Specialty Gas-Lift Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Gas-Lift Valves ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Gas-Lift Mandrels ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Downhole Injection Systems ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Latches ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Kickover Tools ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Gas-Lift Accessories ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Monitoring ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'RedEye ',
        data: 'Artificial Lift ',
        data3: 'Simon Suarez ',
        data4: '281.222.4634 ',
        data5: 'Russell Ritchie ',
        data6: '210.232.6701 '
    }, {
        value: 'Casing Packers ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Inflatables ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Port Collar ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Production Packers ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Straddle Packers ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Cementing ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Cementation ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Float Equipment ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Stage Tools ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Swellables ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Cementing Wiper Plugs and Darts ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Cementing Rental Tools ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Centralizers ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Float Equipment ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Stage Cementing Tools ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Cementing Systems ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Cementing Services ',
        data: 'Cementation Products ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jason Nelson ',
        data6: '432.208.8450 '
    }, {
        value: 'Drilling Motor ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Fluid Power Systems ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Borehole Enlargement ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Directional Drilling ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'EM/MWD ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'MWD ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Geosteering ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'LWD ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'RSS ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Drilling Software ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Well Engineering ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Logging While Drilling ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Gamma Logging ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Resistivity Logging ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Neutron Porosity and Density Logging ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Sonic Logging ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Pressure Testing ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Borehole Imaging ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Well Placement ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Measurement While Drilling ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Rotary-Steerable Systems ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Directional Drilling ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Rotary Steerable ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Magnus ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Revolution ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Real-Time Data Services ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'RTDS ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Data Delivery Services ',
        data: 'Drilling Services ',
        data3: 'Enrique Salas ',
        data4: '281.513.7089 ',
        data5: 'Kevin Neeley ',
        data6: '432.210.8251 '
    }, {
        value: 'Borehole Enlargement ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Drill Pipe ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Handling Tools ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Landing Strings ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Power Swivels ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Machine Shop Service ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Drilling Jars ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Shock Tools ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Stabilizers ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Impact Tools ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Low Friction Tools ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'BOP ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Pressure Control ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Snubbing ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Well Cat ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Tubulars ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Drilling Tools ',
        data: 'Drilling Tools ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Mills ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Fishing ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Casing Patches ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Cutting ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Underreamers ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Casing Patches ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Milling ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Reverse Jobs ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Foam Units ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Casing Exit ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Retrieving Tools ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Whipstocks ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Mill Thru Multilaterals ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Multi Lateral Starburst ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Decommissioning ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Wellbore Cleaning ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Openhole Fishing ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Cased-Hole Fishing ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Milling and Washover ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Impact Tools ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Heavy Duty Wireline Fishing ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Expandable Cased-Hole Liner ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'AccuView ',
        data: 'Intervention Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Liner Hanger ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Total Sub ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Liner Top Isolation ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Expandable Liner Hangers ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Plug Dropping ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Tie Back ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Solid Expandables ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Solid Expandables Other ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Internal Patch ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'X-span Patch ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Solid Expandable Liners ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Integrated Systems ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Liner Packers ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Running Tools and Accessories ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Tieback Equipment ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Cement Displacement Tools ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Liner Systems ',
        data: 'Liner Hangers ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Daniel Cole ',
        data6: '432.631.0112 '
    }, {
        value: 'Intelligent Well Systems ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Optical Sensing Sys Gen ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'PT Gauges ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Completions ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Cased Hole Completion ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Open Hole Comletions ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Downhole Control Valves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Flow Control Systems ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Hydraulic Flow Control ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Safety Valve Systems ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Lower Completions Sustaining ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Anchors ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Frac Sleeves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Petrowell ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Swelltec ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Safety Systems ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Tubing-Retrievable Safety Valves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Wireline-Retrievable Safety Valves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Production Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Sealbore Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Single-String Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Hydrostatic Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'RFID-Enabled Systems ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Flow Control ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Sliding Sleeves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Isolation Barrier Valves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Bidirectional Barrier Valves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Fluid-Loss Control Valves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'RFID-Enabled Barrier Valves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Multistage Fracturing ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Composite Plugs ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Stimulation Sleeves ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Openhole Isolation ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Openhole Isolation Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Cup-Seal Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Swellable Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Hydraulic Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Sand Control ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Well Screens ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Expandable Screens ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Gravel-Pack Systems ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'WFXØ ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Fluid-Loss Control ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Inflow Control Devices ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Fluid Systems and Placement ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Minima ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Cup-Seal Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Swellable Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Hydraulic Packers ',
        data: 'Open & Cased Hole Completion ',
        data3: 'Eric Reyes ',
        data4: '432.634.0354 ',
        data5: 'Todd Dupre ',
        data6: '713.294.4789 '
    }, {
        value: 'Other ',
        data: 'Other Product Line ',
        data3: 'Michael Guajardo ',
        data4: '432.230.8795 ',
        data5: 'Michael Guajardo ',
        data6: '432.230.8795 '
    }, {
        value: 'SCADA ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Production Software ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Foresite ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Lowis ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Cygnet ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Monitoring ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Lift Optimization ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Asset Optimization ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Well Modeling ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Surface Network Modeling ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Reservoir Modeling and Monitoring ',
        data: 'Production Software ',
        data3: 'Autumn Zschiesche ',
        data4: '281.665.9701 ',
        data5: 'Autumn Zschiesche ',
        data6: '281.665.9701 '
    }, {
        value: 'Reservoir Monitoring ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Pressure and Temperature Monitoring ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Thermal Monitoring ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Flow Monitoring ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Data Visualization Software ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Memory Gauges ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Electronic Sensing Systems ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Optical Sensing Systems ',
        data: 'Reservoir Monitoring ',
        data3: 'Riley Smith ',
        data4: '940.577.5229 ',
        data5: 'John Burke ',
        data6: '432.238.6702 '
    }, {
        value: 'Managed Pressure Drilling ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'PressurePro Control System ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Continuous Flow System ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Downhole Deployment Valves ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Underbalanced Drilling ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Downhole Deployment Valves ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'MPD ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'RCD ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Choke ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Secure Drilling ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'OneSync ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Microflux ',
        data: 'Secure Drilling Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Jerid Achord ',
        data6: '318.623.5799 '
    }, {
        value: 'Well Hub ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'AutoDriller ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'EDR ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Gas Wizard ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'GC Tracer ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Isotube Auto Loader ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Mass Spectrometer ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Mud Logging Service ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Pore Pressure ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Isotech RT ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Source Rock Analyzer ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Wellsite Geology ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'X-Ray Diffraction ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'X-Ray Fluorescence ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Surface Logging Systems ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Advanced Gas Analysis ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Drilling Management Systems ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Mud-Logging Services ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Pore-Pressure Prediction ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Advanced Cuttings Analysis ',
        data: 'Surface Logging ',
        data3: 'Jameson West ',
        data4: '432.214.1518 ',
        data5: 'Todd Thompson ',
        data6: '817.776.7084 '
    }, {
        value: 'Drilling with Casing ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Drilling with Liner ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'TRS ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Casing Running Services ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Connection Testing ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Drillpipe Tong Service ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Handling Systems ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Handling Tools ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Power Tongs ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Power Units ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Torque Monitoring ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Overdrive ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Bucking ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Iron Derrickman Sales ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Mechanized Equipment Sales ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'V-Tech Sales ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Mud Pumps ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Tubular Management ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Bucking Systems ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Offline Makeup Facility ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Mechanized Rig Systems ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'AutoTong® System ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Rig Integration ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Top-Drive Casing Running and Drilling ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Completion Running ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Riser Running ',
        data: 'Tubular Running Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Capillary Injection ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Renaissance ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Surface PCE ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Wireline Equipment ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'PTW Intervention ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Slick Plugs ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Tubing Packers ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Completion ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Packers ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Sand Control ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Plug Back Services ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Casing Exit ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Fishing ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing General ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Milling ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Motors ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Thru Tubing Whipstock ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Completions Well Services ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Safety Valve Rejuvenation ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Tubing Sand Control ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Remedial Production Enhancement ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Production Logging ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Saturation Logging ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Integrity Logging ',
        data: 'Well Services ',
        data3: 'Daniel Vanliere ',
        data4: '570.909.7911 ',
        data5: 'Joe Balog ',
        data6: '724.970.4983 '
    }, {
        value: 'Wireline ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Logging ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Perforating ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Pipe Recovery ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Slickline ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Geoscience ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Wireline Geoscience ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Borehole Seismic ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Tubing Conveyed Perforating ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'N2 Services ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Heavy Duty Fishing ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Heavy Duty Wireline ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Heavy Duty Wireline Cost ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Compact Memory OH Wireline ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Compact OH Wireline ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Openhole Wireline ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Cased-Hole Wireline ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Raptor ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Borehole Seismic Services ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Wireline Conveyance ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Wireline Surface Equipment ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Interpretation and Evaluation Services ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Slimline Logging Services ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Data Delivery Services ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Perforating Services ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Borehole Seismic Services ',
        data: 'Wireline ',
        data3: 'Eric Reyes ',
        data4: '432.202.8756 ',
        data5: 'Bruce McLachlan ',
        data6: '432.215.5937 '
    }, {
        value: 'Reservoir Services ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Advanced Testing Lab ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Geochemistry Lab ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Geology Lab ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'ISO ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Laboratories ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Routine Lab ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Storage ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Studies ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Wellsite ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Wellsite Geosciences ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'FracAdvisor ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Reservoir Description ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Core Handling Services ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Wellsite Core Handling ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Core Transport ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Onsite Sampling and Preservation ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Wellsite Pressure Core Handling ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Wellsite Canister Gas Desorption ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Routine Core Analysis ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Special Core Analysis ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Geochemical Lab Analysis ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Geochemical Interpretive Services ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Geological Services ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Reservoir Fluid Analysis ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Sample Management ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Express Lab ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Sample Type ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Play Type ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Oil and Gas Geochemical Interpretation ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Sedimentology ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Geologic Interpretation ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Oil Sample Library ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Basin Data Packages ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Core Data Delivery ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Chromatography Suit ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    }, {
        value: 'Interpretive Services ',
        data: 'Labs ',
        data3: 'Jessica Gardner ',
        data4: '432.248.1973 ',
        data5: 'Lorne Rutherfurd ',
        data6: '432.254.6083 '
    } ];

    // setup autocomplete function pulling from products[] array
    $('#product-interest').autocomplete({
        source: products,
        select: function(event,ui) {
            /*var thehtml = ' <strong style="color:#ce1141">WFT CONTACT INFORMATION:</strong><br> <br><strong>PRODUCT SEGMENT:</strong> ' + suggestion.value + ' <br><br><strong>TECHNICAL SALES:</strong> ' + suggestion.data3 + ' <br> <strong>TECHNICAL SALES PHONE:</strong> ' + suggestion.data4  + ' <br> <br><strong>OPERATIONS MANAGER:</strong> ' + suggestion.data5 + ' <br> <strong>OPERATIONS MANAGER PHONE:</strong> ' + suggestion.data6;
            $('#outputcontent').html(thehtml);*/

            $('#product-segment').val(ui.item.data);

            var ts = "<b>Tech Sales Manager</b><br>" + ui.item.data3 + "<br>" + ui.item.data4;
            var ops = "<b>Operations Manager</b><br>" + ui.item.data5 + "<br>" + ui.item.data6;

            $("#noAccount #techSales").html(ts);
            $("#noAccount #opsManager").html(ops);
        }
    });

});
