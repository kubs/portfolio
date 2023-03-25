import Head from "next/head";


import { Layout } from "../components/Layout";
import { useTheme as useNextTheme } from "next-themes";
import { StyledCheckboxText, Switch, useTheme } from "@nextui-org/react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Spacer,
  Radio,
  Container,
  Col,
  Row,
  Grid,
  Badge,
  Progress,
} from "@nextui-org/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, SiGmail } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SunIcon } from '../components/SunIcon';
import { MoonIcon } from '../components/MoonIcon';

export default function ThemeChanger() {
  //const { theme, setTheme } = useTheme()

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = ["Home", "CV", "Projects", "About"];
  const code=`
  class About_Me:
  goal = " Discover and explore more unknowns. "  
  degree = " Bachelor of Computer Science "
  university = "Concordia University" 
  skills = {
  Language : [ "Python", " JavaScript" , "Java" , "SQL"], 
  Front-end: [ " React ", " Next.js ", " Wordpress ", " TailwindCSS " ]     
  Back-end:  [ " Node.js ", " Flask "]
  Date-Analysis: [ " Excel ", " Numpy ", " Pandas "]
            } 
  attitudes = ["Work smart", "Word hard"]         
  passion = 'full' 
  interests = [ " Reading ", "Web Programming", " Data Science "]     
  `
  return (
    <Layout>
      <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit">
            Hui Zhao
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive href="#">
            CV
          </Navbar.Link>
          <Navbar.Link href="#">Project</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          
       {/*  <Navbar.Item>
            <Button>
            <Text>
              ss
              </Text> 
            </Button>  
            
            
          </Navbar.Item> */}

          <Navbar.Item>
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              iconOn={<MoonIcon filled />}
             iconOff={<SunIcon filled />}  
            
            />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>

      {/* <Grid.Container gap={3} justify="center">
        <Spacer />
        <Grid xs justify="right">
          <a href="Resume_HuiZhao.pdf">
            <Button>Download PDF</Button>
          </a>
        </Grid>
        <Spacer />
      </Grid.Container> */}
      <Grid.Container justify="center">
        <Grid fluid justify="center">
          <Text hideIn="xs"
            
            size={80}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              letterSpacing: "3px",
              ml: "$2",
            }}
            weight="bold"
          >
            HUI ZHAO
          </Text>
          <Text showIn="xs"
            
            size={50}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              letterSpacing: "3px",
              ml: "$2",
            }}
            weight="bold"
          >
            HUI ZHAO
          </Text>
        </Grid>
      </Grid.Container>
      <Container justify="center" xs={9} md={9}>
        <div>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "A Front-end Developer",
              1000,
              "A Back-end Developer",
              1000,
              "A Python Developer",
              1000,
              "A Data Analyst",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ textAlign: "center" }}
            wrapper="div" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </div>
      </Container>
      <Grid.Container justify="center" gap={1}>
        <Grid
          xs={12}
          md={3}
          alignItems="center"
          justify="center"
          
        >
          <Text>
            <FaEnvelope />
          </Text>
          <Text color="primary" h4 css={{ ml: "$6" }}>
            <Link href="mailto:iuhoahz@gmail.com">iuhoahz@gmail.com</Link>
          </Text>
        </Grid>

        <Grid xs={12} md={3} alignItems="center" justify="center">
          <Text>
            <FaMapMarkerAlt />
          </Text>
          <Text h4 color="primary" css={{ ml: "$6" }}>
            Laval, Quebec, Canada
          </Text>
        </Grid>
      </Grid.Container>

      <hr />
      <Spacer y={1} />

     

      
        <Container xs={12} sm={12} md={12} justify="center">
          <Row justify="center">
          <code>
            {code}
          </code>  
          </Row>
        </Container>
        <Spacer />
        {/* <!--Grid
          xs={8}
          sm={8}
          md={7}
          justify="center"
        
        >
          <Text>
            Bachelor of Computer Science at Concordia University. Looking for
            Positions related to Data Analyst and Data Scientist. Love data
            science. Good work attitude: Hard and smart worker, details oriented
            and eager to learn. Proficient Excel, Python, SQL user. Familiar
            with Front-end languages and frameworks.
          </Text>
        </Grid--> */}
      

      <Spacer y={2} />
      
      <Container justify="center" id="work-experience">
      <a justify="center" href="#work-experience">
        <Text
          weight="bold"
          size="xl"
          css={{
            textAlign: "center",
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            letterSpacing: "2px",
          }}
          
        >
          WORK EXPERIENCE
        </Text>
        </a>
      </Container>
     
      <Spacer />

      <Grid.Container justify="center" gap={8}>
        <Grid justify="center" xs={12} sm={6} md={5}>
          <Card isHoverable sm>
            <Card.Header>
              <Text weight="bold">
              Shopperplus.ca
              
              <br />
              March 1, 2021 - Present
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              
              Product Specialist
              <Grid.Container alignItems="center">
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>In charge of daily operation of PrimeCables.ca;</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Planning of monthly promotions;</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>SEO Optimization;</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Purchase prediction based on data analysis;</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Data Analysis with Metabase;</Text>
                </Grid>
              </Grid.Container>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Container justify="center">
                <Link href="https://www.shopperplus.ca">
                  www.shopperplus.ca
                </Link>
              </Container>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid justify="center" xs={12} sm={6} md={5}>
          <Card isHoverable sm>
            <Card.Header>
              <Text weight="bold">
              Fruitz IT
              <br />
              January 1, 2022 - January 1, 2023
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              Remote Web Developer
              <Grid.Container alignItems="center">
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Web development with WordPress;</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Web hosting and domain name;</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Website feature and contents update;</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Website building consulting;</Text>
                </Grid>
                {/* <Grid xs={12} alignItems="center">
                  <Badge variant="dot" css={{ mr: "$2" }} />
                  <Text>Data Analysis with Metabase;</Text>
                </Grid> */}
              </Grid.Container>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Container justify="center">
              <Link href="https://www.fruitzit.ca">www.fruitzit.ca</Link>
              </Container>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Container xs={12} sm={12} md={12}>
        <Row justify="center">
          <Text
            weight="bold"
            size="xl"
            css={{
              textAlign: "center",
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
              letterSpacing: "2px",
            }}
            color="primary"
          >
            EDUCATION
          </Text>
        </Row>
        <Row justify="center">
          <Link href="https://www.concordia.ca">Concordia University</Link>
        </Row>
        <Row justify="center">(January 31, 2014 - June 30, 2018)</Row>
        <Row justify="center">
          <Text blockquote justify="center">
            The time spent at Concordia is always fruitful. The courses that I
            took may not teach me all the popular technologies, but it really
            laid a solid foundation for my future study. The conception and the
            attitude that I learned makes me a good fast learner and problem
            solver.
          </Text>
        </Row>
        <Grid.Container justify="center">
          <Grid>
            <Badge color="primary" variant="flat">
              Data Structure and Algorithm
            </Badge>
          </Grid>
          <Grid>
            <Badge color="primary" variant="flat">
              Object-Oriented Programming
            </Badge>
          </Grid>
          <Grid>
            <Badge color="primary" variant="flat">
              Database
            </Badge>
          </Grid>
          <Grid>
            <Badge color="primary" variant="flat">
              Computer Network
            </Badge>
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer />
      <Container>
        <Row justify="center">
          <Text
            weight="bold"
            size="xl"
            css={{
              textAlign: "center",
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
              letterSpacing: "2px",
            }}
            color="primary"
          >
            SKILLS
          </Text>
        </Row>
        <Spacer />
        <Grid.Container justify="center" gap={3}>
          <Grid xs={12} sm={12} md={6}>
            <Card>
              <Card.Header>
                
                 
                  <Text weight="bold">Excel & Google Sheets</Text>
                  
                
                  
                
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid.Container>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                      Formulas: vlookup, sort, match, index, if, switch;
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                      Text processing; Data cleaning;
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>Conditional formatting;</Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>Query(Google Sheets);</Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Card>
              <Card.Header>
                <Grid.Container>
                  <Grid sm={12}>
                    <Text weight="bold">Python</Text>
                  </Grid>
             
                </Grid.Container>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid.Container>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                    Jupyter notebook;
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                  
                      Numpy & Pandas: Data cleaning and data analysis;
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                      Web scraping: Requests; Selenium;
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                      Flask framework
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>

        <Grid.Container justify="center" gap={3}>
          <Grid xs={12} sm={12} md={6}>
            <Card>
              <Card.Header>
                
                 
                  <Text weight="bold">Front-end</Text>
                  
                
                  
                
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid.Container>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                      HTML 5
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                      CSS (Bootstrap, TailwindCSS, NextUI)
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>JavaScript</Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>React JS (NextJS, GatsbyJS)</Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Card>
              <Card.Header>
                <Grid.Container>
                  <Grid sm={12}>
                    <Text weight="bold">Back-end</Text>
                  </Grid>
             
                </Grid.Container>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid.Container>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                    Python (Flask)
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                  
                     Node.JS
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                     SQL & MongoDB
                    
                    </Text>
                  </Grid>
                  <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>
                      RESTful API & GraphQL 
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>

      <Spacer />
      <Container>
        <Row justify="center">
          <Text
            weight="bold"
            size="xl"
            css={{
              textAlign: "center",
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
              letterSpacing: "2px",
            }}
            color="primary"
          >
            PROJECTS
          </Text>
        </Row>
        <Spacer />
       <Grid.Container gap={2}>
        <Grid xs={12} sm={4} md={4} >
          
          
                    
            <Card>
              <Card.Header>
                <Grid.Container>
                  <Grid sm={12}>
                    <Text weight="bold">
                  
                    Fruitz IT
                    

                    </Text>
                  </Grid>
             
                </Grid.Container>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Grid.Container>
                  <Grid xs={12} alignItems="center">
                   
                    <Text css={{ ml: "$2" }}>
                    - Built with WordPress; 
                    </Text>
                  </Grid>
                
                </Grid.Container>
              </Card.Body>
              <Card.Divider />
            <Card.Footer>
              <Container justify="center">
              <Link href="https://www.fruitzit.ca">www.fruitzit.ca</Link>
              </Container>
            </Card.Footer>
            </Card>

                    
                  </Grid>

                  <Grid xs={12} sm={4} md={4} >
          
          
                    
          <Card>
            <Card.Header>
              <Grid.Container>
                <Grid sm={12}>
                  <Text weight="bold">
                
                  Whispering Pine RV Estates
                  

                  </Text>
                </Grid>
           
              </Grid.Container>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Grid.Container >
                <Grid xs={12} alignItems="center">
                 
                  <Text css={{ ml: "$2" }}>
                  - Built with WordPress; 
                  </Text>
                </Grid>
                
              </Grid.Container>
            </Card.Body>
            <Card.Divider />
          <Card.Footer>
            <Container justify="center">
            <Link css={{ ml: "$2" }} href="https://www.whisperingpinesrvpei.com/">
                    whisperingpinesrvpei.com
                    </Link>
            </Container>
          </Card.Footer>
          </Card>

                  
                </Grid>

                <Grid xs={12} sm={4} md={4} >
          
          
                    
          <Card>
            <Card.Header>
              <Grid.Container>
                <Grid sm={12}>
                  <Text weight="bold">
                
                  My portfolio site 
                  

                  </Text>
                </Grid>
           
              </Grid.Container>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Grid.Container>
                <Grid xs={12} alignItems="center">
                 
                  <Text css={{ ml: "$2" }}>
                  - SSR & Responsive & Dark/Light Theme;
                  </Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                 
                  <Text css={{ ml: "$2" }}>
                
                  -  Built with Next.js & hosted on Vercel;
                  </Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                 
                  <Text css={{ ml: "$2" }}>
                   - Source code on Github
                  
                  </Text>
                </Grid>
               
              </Grid.Container>
            </Card.Body>
            <Card.Divider />
          <Card.Footer>
            <Container justify="center">
            <Link css={{ ml: "$2" }} href="https://www.huizh.ca"> https://www.huizh.ca
                    </Link>
            </Container>
          </Card.Footer>
          </Card>

                  
                </Grid>

</Grid.Container>
                 
           
       
          
        <Spacer />
        </Container>
        <Container fluid justify="center">
          <Spacer y={3}/>
          <hr />
<Spacer />
          <Text css={{textAlign: "center" ,
                      letterSpacing: "2px"
                    }}>

                  ❤️ Built with NextJS, NextUI and React(react-type-animation) 
            </Text>
            <Spacer />
          </Container>
    </Layout>
  );
}
