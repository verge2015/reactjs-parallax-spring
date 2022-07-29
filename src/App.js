import './App.css';
import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Typography } from '@mui/material';

//Cards
import Card from './components/Card';

//Background
import bg from './assets/bg.jpg';
import satellite4 from './assets/satellite4.svg';
import satellite3 from './assets/satellite3.svg';
import cloud from './assets/cloud.svg';
import stars from './assets/stars.svg';

import infra from './assets/infra.svg';
import aws from './assets/aws.svg';
import earth from './assets/earth.svg';

import server from './assets/server.svg';

function App() {
  const ref = useRef();

  const layerSpeed = 1.7
  const contentSpeed = 1

  return (
    <div className="App">

      <Parallax
        pages={6}
        ref={ref}
        scrolling={false}>

{/*Background Pages*/}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={6}
          style={{
            backgroundColor: '#243B4A',
            backgroundImage: `url(${stars})`,
            backgroundSize: 'cover',
          }}
        />

{/*Satellites*/}
        <ParallaxLayer
          sticky={{ start: 0.5, end: 3 }}
          speed={-0.3} style={{ pointerEvents: 'none' }} >
            <img src={satellite4} style={{ width: '15%', marginLeft: '70%', marginTop: '5%' }} alt='satellite' />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4, end: 6 }}
          style={{ pointerEvents: 'none' }}>
            <img src={satellite3} style={{ width: '20%', marginLeft: '75%', marginTop: '5%' }} alt='satellite' />
        </ParallaxLayer>

{/*Clouds*/}
        <ParallaxLayer offset={.2} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={2.75} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={3.75} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt='cloud' />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '10%' }} alt='cloud' />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '65%' }} alt='cloud' />
        </ParallaxLayer>

{/*Last Page Content*/}
        <ParallaxLayer
          offset={5.5} speed={-0.4}
          style={{ display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  pointerEvents: 'none' }}>
            <img src={earth} style={{ width: '60%' }} alt='earth' />
        </ParallaxLayer>

{/*Background Pages*/}
        {/*Page 1 Background*/}
        <ParallaxLayer
          offset={0}
          speed={2}
          factor={1.7}
          style={{
            backgroundColor: '#57C7FF',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            opacity: 0.9
          }}
        />

        {/*Page 2 Background*/}
        <ParallaxLayer
          offset={1}
          speed={layerSpeed}
          style={{
            backgroundColor: '#1C205F',
            backgroundSize: 'cover',
            opacity: 0.3
          }}/>

        {/*Page 3 Background*/}
        <ParallaxLayer
          offset={2}
          speed={layerSpeed}
          style={{
            backgroundColor: '#35D3DC',
            backgroundSize: 'cover',
            opacity: 0.3
          }}
        />

        {/*Page 4 Background*/}
        <ParallaxLayer
          offset={3}
          speed={layerSpeed}
          style={{
            backgroundColor: '#DCD9E5',
            backgroundSize: 'cover',
            opacity: 0.3
          }}
        />

        {/*Page 5 Background*/}
        <ParallaxLayer
          offset={4}
          speed={layerSpeed}
          style={{
            backgroundColor: '#00A6B6',
            backgroundSize: 'cover',
            opacity: 0.3
          }}
        />

        {/*Page 6*/}
        <ParallaxLayer
          offset={5}
          speed={.5}
          onClick={() => ref.current.scrollTo(0)}
          style={{
            backgroundColor: '#57C7FF',
            backgroundSize: 'cover',
            opacity: 0.3
          }}
        />

{/*Contents*/}
        {/*Page 1 Content*/}
        <ParallaxLayer
          offset={0.3}
          speed={2}
          onClick={() => ref.current.scrollTo(1)}
        >
          <Typography variant="h1" component="h2"
            style={{
              color: '#ffffff'
            }}
            sx={{
              fontSize: {
                lg: '600%',
                md: '400%',
                sm: '300%',
                xs: '300%'
              }
            }}>
            Cloud Architectures
          </Typography>

          <Typography gutterBottom variant="subtitle1" component="div" color='#DCD9E5' sx={{ fontStyle: 'italic' }}>
            "Click anywhere or scroll to see more"
          </Typography>

        </ParallaxLayer>

        {/*Page 2 Content*/}
        <ParallaxLayer
          offset={1.2}
          speed={contentSpeed}
          onClick={() => ref.current.scrollTo(2)}
          style={{
            flexDirection: 'column',
          }}
        >
          <Typography variant="h2" component="h2"
            sx={{
              color: '#ffffff',
              fontSize: {
                lg: '300%',
                md: '300%',
                sm: '200%',
                xs: '200%'
              },
            }}>
            <img src={infra} style={{ width: '10%', margin: 'auto' }} alt='infra' />
            Cloud Infrastructure Fundamentals
          </Typography>

          <Card
            title="High availability"
            description="High Availability in the cloud is achieved by creating clusters. A high availability cluster is a group of servers that act as a single server to provide continuous uptime. These servers will have access to the same shared storage for data, so if a server is unavailable, the other servers pick up the load."
            icon={server}
          />

          <Card
            title="Fault tolerance"
            description="Fault tolerance simply means your infrastructure is capable of supporting uninterrupted functionality of your applications despite failures of components"
            icon={server}
          />

        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={contentSpeed}
          onClick={() => ref.current.scrollTo(3)}>
          <Typography variant="h2" component="h2"
            sx={{
              color: '#ffffff',
              fontSize: {
                lg: '300%',
                md: '300%',
                sm: '200%',
                xs: '200%'
              }
            }}>
            <img src={infra} style={{ width: '10%', margin: 'auto' }} alt='infra' />
            Cloud Infrastructure Fundamentals
          </Typography>

          <Card
            title="Vertical and Horizontal Scaling"
            description="Vertical scaling of cloud resources is the enhancement of memory, processing power, networking, and other technical capabilities of an existing cloud server, either by the addition or replacement of components such as CPUs and HDDs.
            Horizontal scaling refers to provisioning additional servers to meet your needs, often splitting workloads between servers to limit the number of requests any individual server is getting. Horizontal scaling in cloud computing means adding additional instances instead of moving to a larger instance size."
            icon={server}
          />

          <Card
            title="Disaster recovery"
            description="Cloud disaster recovery (CDR) is a cloud-based managed service that helps you quickly recover your organization's critical systems after a disaster and provides you remote access to your systems in a secure virtual environment."
            icon={server}
          />
        </ParallaxLayer>

        {/*Page 3 Content*/}
        <ParallaxLayer
          offset={3.2}
          speed={contentSpeed}
          onClick={() => ref.current.scrollTo(4)}
        >
          <Typography variant="h2" component="h2"
            style={{
              color: '#ffffff'
            }}
            sx={{
              fontSize: {
                lg: '300%',
                md: '300%',
                sm: '200%',
                xs: '200%'
              }
            }}>
            <img src={aws} style={{ width: '10%', margin: 'auto' }} alt='aws' />
            AWS Global Infrastructure
          </Typography>

          <Card
            title="Region"
            description="AWS has the concept of a Region, which is a physical location around the world where we cluster data centers. We call each group of logical data centers an Availability Zone. Each AWS Region consists of multiple, isolated, and physically separate AZs within a geographic area."
            icon={server}
          />

          <Card
            title="AWS Availability Zone"
            description="An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center. All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking, over fully redundant, dedicated metro fiber providing high-throughput, low-latency networking between AZs. All traffic between AZs is encrypted."
            icon={server}
          />

        </ParallaxLayer>

        {/*Page 4 Content*/}
        <ParallaxLayer
          offset={4.2}
          speed={contentSpeed}
          onClick={() => ref.current.scrollTo(5)}
        >
          <Typography variant="h2" component="h2"
            style={{
              color: '#ffffff'
            }}
            sx={{
              fontSize: {
                lg: '300%',
                md: '300%',
                sm: '200%',
                xs: '200%'
              }
            }}>
            <img src={aws} style={{ width: '10%', margin: 'auto' }} alt='aws' />
            AWS Global Infrastructure
          </Typography>

          <Card
            title="AWS Edge Locations"
            description="Edge locations - Ashburn, VA; Atlanta GA; Boston, MA; Chicago, IL; Dallas/Fort Worth, TX; Denver, CO; Hayward, CA; Hillsboro, OR; Houston, TX; Jacksonville, FL; Los Angeles, CA; Miami, FL; Minneapolis, MN; Montreal, QC; New York, NY; Newark, NJ; Palo Alto, CA; Phoenix, AZ; Philadelphia, PA; Querétaro, MX; San Jose, CA; Seattle, WA; South Bend, IN; Toronto, ON; Vancouver, BC"
            icon={server}
          />

          <Card
            title="AWS Local Zones"
            description="AWS Local Zones place compute, storage, database, and other select AWS services closer to end-users. With AWS Local Zones, you can easily run highly-demanding applications that require single-digit millisecond latencies to your end-users such as media & entertainment content creation, real-time gaming, reservoir simulations, electronic design automation, and machine learning."
            icon={server}
          />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
