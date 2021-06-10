---
title: "A dummy datasource for CakePHP"
date: "2010-02-14"
category:
  - "code"
  - "php"
---

I was recently developing a project at [work](http://rehabstudio.com/) which at the beginning didn't need a database. However, [Cake](http://cakephp.org) was still testing the database connection and issuing a warning as a result when it couldn't connect. My solution was to create a dummy datasource which silenced the warnings and allowed me to get on with the rest of development in relative peace.

The scope of the project changed and a database was required. The dummy datasource had to go so I thought I'd share it here before it was thrown to the winds.

Here's the datasource, which belongs in `models/datasources/dbo/dbo_dummy.php`:

        function connect(){
                $this->connected = true;
                return true;
        }

        function disconnect(){
                $this->connected = false;
                return true;
        }

}
?>

To use the datasource use the following in your `config/database.php`:

        var $default = array(
                'driver' => 'dummy',
                'host' => '',
                'login' => '',
                'password' => '',
                'database' => '',
        );

}
?>

Enjoy!
