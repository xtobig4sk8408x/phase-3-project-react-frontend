import React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

function Login() {

    const handleSubmit = () => {
        let x
    }

    const handleChange = () => {
        let y
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const r = await fetch("http://localhost:9292/users")
    //         const data = await r.json()
    //         setUsers(data)
    //       } catch (e) {
    //         alert(e)
    //       }
    //     }
    //     fetchData()
    //     }, [])
      
    //     const mappedUsers = users.map(user => <User {...user} key = {user.id} />)
      
    //       return(
    //           <div>
    //             {mappedUsers}
                  
    //           </div>
    //       )
    //   }

    return (
        <CssVarsProvider>
          <main>
            <Sheet
              sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body2">Sign in to continue.</Typography>
              </div>
              <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    onChange={handleChange}
                    // value={user.email}
                    value=""
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                    // html input attribute
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    // value={user.password}
                    value=""
                    />
                </FormControl>
    
                <Button type="submit" sx={{ mt: 1 /* margin top */ }}>Log in</Button>
                </form>
              <Typography
                endDecorator={<Link /*onClick={() => setToggleAuth(currentVal => !currentVal)}*/>Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Don&apos;t have an account?
              </Typography>
            </Sheet>
          </main>
        </CssVarsProvider>
      )
}

export default Login;