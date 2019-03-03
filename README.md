## @hamgom95/bikecalc

Bicycle gear calculator.

### API Documentation

#### Constants

<dl>
<dt><a href="#aeroDrag">aeroDrag</a> ⇒ <code>number</code></dt>
<dd><p>Calculate aerodynamic drag force.</p>
</dd>
<dt><a href="#gearInches">gearInches</a> ⇒ <code>number</code></dt>
<dd><p>Calculate gear inches for drivetrain.</p>
</dd>
<dt><a href="#development">development</a> ⇒ <code>number</code></dt>
<dd><p>Calculate development of drivetrain.</p>
</dd>
<dt><a href="#gainRatio">gainRatio</a> ⇒ <code>number</code></dt>
<dd><p>Calculate gain ratio for drivetrain.</p>
</dd>
<dt><a href="#speedAtCadence">speedAtCadence</a> ⇒ <code>number</code></dt>
<dd><p>Calculate speed (m/s) at cadence for drivetrain.</p>
</dd>
<dt><a href="#skidPatches">skidPatches</a> ⇒ <code>number</code></dt>
<dd><p>Calculate number of skid patches for gear combination.</p>
</dd>
<dt><a href="#calories">calories</a> ⇒ <code>number</code></dt>
<dd><p>Calculate estimated energy expenditure while cycling at a specific power.</p>
</dd>
<dt><a href="#power">power</a> ⇒ <code>number</code></dt>
<dd><p>Calculate power for cadence and force.</p>
</dd>
<dt><a href="#force">force</a> ⇒ <code>number</code></dt>
<dd><p>Calculate force for power and cadence.</p>
</dd>
<dt><a href="#pedalVelocity">pedalVelocity</a> ⇒ <code>number</code></dt>
<dd><p>Calculate linear pedal velocity from cadence.</p>
</dd>
</dl>

<a name="aeroDrag"></a>

#### aeroDrag ⇒ <code>number</code>
Calculate aerodynamic drag force.

**Kind**: global constant  
**Returns**: <code>number</code> - Aerodynamic drag force (in N).  

| Param | Type | Description |
| --- | --- | --- |
| Cd | <code>number</code> | The drag coefficient. |
| A | <code>number</code> | The frontal area (in m2). |
| p | <code>number</code> | The air density (in kg/m3). |
| u | <code>number</code> | The air velocity relative to the object (in m/s). |

<a name="gearInches"></a>

#### gearInches ⇒ <code>number</code>
Calculate gear inches for drivetrain.

**Kind**: global constant  
**Returns**: <code>number</code> - Gear inches  

| Param | Type | Description |
| --- | --- | --- |
| chainringTeeth | <code>number</code> | The number of teeth on the front chainring. |
| sprocketTeeth | <code>number</code> | The number of teeth on the rear sprocket. |
| wheelDiameter | <code>number</code> | The wheel diameter in meters. |

<a name="development"></a>

#### development ⇒ <code>number</code>
Calculate development of drivetrain.

**Kind**: global constant  
**Returns**: <code>number</code> - Development in meters.  

| Param | Type | Description |
| --- | --- | --- |
| chainringTeeth | <code>number</code> | The number of teeth on the front chainring. |
| sprocketTeeth | <code>number</code> | The number of teeth on the rear sprocket. |
| wheelDiameter | <code>number</code> | The wheel diameter in meters. |

<a name="gainRatio"></a>

#### gainRatio ⇒ <code>number</code>
Calculate gain ratio for drivetrain.

**Kind**: global constant  
**Returns**: <code>number</code> - Gain ratio  

| Param | Type | Description |
| --- | --- | --- |
| chainringTeeth | <code>number</code> | The number of teeth on the front chainring. |
| sprocketTeeth | <code>number</code> | The number of teeth on the rear sprocket. |
| wheelDiameter | <code>number</code> | The wheel diameter in meters. |
| crankLength | <code>number</code> | The crank length in meters. |

<a name="speedAtCadence"></a>

#### speedAtCadence ⇒ <code>number</code>
Calculate speed (m/s) at cadence for drivetrain.

**Kind**: global constant  
**Returns**: <code>number</code> - speed (in m/s)  

| Param | Type | Description |
| --- | --- | --- |
| chainringTeeth | <code>number</code> | The number of teeth on the front chainring. |
| sprocketTeeth | <code>number</code> | The number of teeth on the rear sprocket. |
| wheelDiameter | <code>number</code> | The wheel diameter in meters. |
| cadence | <code>number</code> | Cadence (in revolutions per minute) |

<a name="skidPatches"></a>

#### skidPatches ⇒ <code>number</code>
Calculate number of skid patches for gear combination.

**Kind**: global constant  
**Returns**: <code>number</code> - The number of skid patches.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| chainringTeeth | <code>number</code> |  | The number of teeth on the front chainring. |
| sprocketTeeth | <code>number</code> |  | The number of teeth on the rear sprocket. |
| [ambidextrous] | <code>boolean</code> | <code>true</code> | Whether the rider is an ambidextrous skidder. |

<a name="calories"></a>

#### calories ⇒ <code>number</code>
Calculate estimated energy expenditure while cycling at a specific power.

**Kind**: global constant  
**Returns**: <code>number</code> - burned energy in kilocalories  

| Param | Type | Description |
| --- | --- | --- |
| watts | <code>number</code> | produced average power over interval in watts |
| seconds | <code>number</code> | number of seconds where power was produced |

<a name="power"></a>

#### power ⇒ <code>number</code>
Calculate power for cadence and force.

**Kind**: global constant  
**Returns**: <code>number</code> - The power (in Watt).  

| Param | Type | Description |
| --- | --- | --- |
| crankLength | <code>number</code> | The cranklength (in meters). |
| cadence | <code>number</code> | The cadence (in revolutions per minute). |
| force | <code>number</code> | The pedalforce (in N). |

<a name="force"></a>

#### force ⇒ <code>number</code>
Calculate force for power and cadence.

**Kind**: global constant  
**Returns**: <code>number</code> - The pedalforce (in N).  

| Param | Type | Description |
| --- | --- | --- |
| crankLength | <code>number</code> | The cranklength (in meters). |
| cadence | <code>number</code> | The cadence (in revolutions per minute). |
| power | <code>number</code> | The power (in Watt). |

<a name="pedalVelocity"></a>

#### pedalVelocity ⇒ <code>number</code>
Calculate linear pedal velocity from cadence.

**Kind**: global constant  
**Returns**: <code>number</code> - The linear pedal velocity (in m/s).  

| Param | Type | Description |
| --- | --- | --- |
| crankLength | <code>number</code> | The cranklength (in meters). |
| cadence | <code>number</code> | The cadence (in revolutions per minute) |

