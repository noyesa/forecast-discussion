# forecast-discussion
Gets the forecast discussion from an NWS office and removes all the formatting except for paragraphs.

## For why?
I check the [NWS Forecast Discussion for my area](https://forecast.weather.gov/product.php?site=MTR&issuedby=MTR&product=AFD&format=CI&version=1&glossary=1) regularly and copy and paste it into messaging apps and the like. However, for some reason the format on the NWS website contains all kinds of newlines that make it look jank as hell. Here's an example of the current discussion -- and how it renders will depend on the width of your browser:

```
.AVIATION...
(18Z TAFS)
Issued at 946 AM PST Wed Feb 19 2025

VFR conditions are expected to prevail with relatively light
winds today and tonight. The North Bay and Central Coast terminals
may see patchy fog develop overnight into Thursday morning, along
with low stratus MVFR/IFR ceilings.


Vicinity of SFO...VFR. Light rain chances until early this
afternoon. Light winds increase to around 10 knots later tonight
out of the northwest.

SFO Bridge Approach...Similar to SFO.

Monterey Bay Terminals...VFR today with MVFR/IFR cigs developing
overnight along with patchy fog at times. Winds will be light
today and tonight, with light southeast winds developing early
Thursday morning.
```

They seem to use line breaks to implement text wrapping, and it looks pretty bad when copies into other contexts. This utility downloads the forecast discussion for a given NWS office, parses and reformats it in a plaintext format that's easy to use.
