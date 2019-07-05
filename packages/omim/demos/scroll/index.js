import '../../src/scroll/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {
  static css = `
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  #header {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #0072d9;
    padding: 0;
    color: #eee;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
  
  #footer {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background: #444;
    padding: 0;
    border-top: 1px solid #444;
  }
  
  #wrapper {
    position: absolute;
    z-index: 1;
    top: 45px;
    bottom: 48px;
    left: 0;
    width: 100%;
    background: #ccc;
    overflow: hidden;
  }
  
  #scroller {
    position: absolute;
    z-index: 1;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    width: 100%;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
  }
  
  #scroller ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: left;
  }
  
  #scroller li {
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #fff;
    background-color: #fafafa;
    font-size: 14px;
  }
  
  `
  render() {
    return <div>
      <div id="header">m-scroll</div>
      <m-scroll min={-(40 * 50 - window.innerHeight + 48 + 45)} max={0} step={40} onEnd={this.onEnd}>
        <div id="wrapper">
          <div id="scroller">
            <ul>
              <li>Pretty row 1</li>
              <li>Pretty row 2</li>
              <li>Pretty row 3</li>
              <li>Pretty row 4</li>
              <li>Pretty row 5</li>
              <li>Pretty row 6</li>
              <li>Pretty row 7</li>
              <li>Pretty row 8</li>
              <li>Pretty row 9</li>
              <li>Pretty row 10</li>
              <li>Pretty row 11</li>
              <li>Pretty row 12</li>
              <li>Pretty row 13</li>
              <li>Pretty row 14</li>
              <li>Pretty row 15</li>
              <li>Pretty row 16</li>
              <li>Pretty row 17</li>
              <li>Pretty row 18</li>
              <li>Pretty row 19</li>
              <li>Pretty row 20</li>
              <li>Pretty row 21</li>
              <li>Pretty row 22</li>
              <li>Pretty row 23</li>
              <li>Pretty row 24</li>
              <li>Pretty row 25</li>
              <li>Pretty row 26</li>
              <li>Pretty row 27</li>
              <li>Pretty row 28</li>
              <li>Pretty row 29</li>
              <li>Pretty row 30</li>
              <li>Pretty row 31</li>
              <li>Pretty row 32</li>
              <li>Pretty row 33</li>
              <li>Pretty row 34</li>
              <li>Pretty row 35</li>
              <li>Pretty row 36</li>
              <li>Pretty row 37</li>
              <li>Pretty row 38</li>
              <li>Pretty row 39</li>
              <li>Pretty row 40</li>
              <li>Pretty row 41</li>
              <li>Pretty row 42</li>
              <li>Pretty row 43</li>
              <li>Pretty row 44</li>
              <li>Pretty row 45</li>
              <li>Pretty row 46</li>
              <li>Pretty row 47</li>
              <li>Pretty row 48</li>
              <li>Pretty row 49</li>
              <li>Pretty row 50</li>
            </ul>
          </div>
        </div>

      </m-scroll>

      <div id="footer"></div>
    </div>

  }
})


render(<my-app />, 'body')