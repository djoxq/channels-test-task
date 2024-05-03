import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/container';
import Table from '../../components/table';
import Hero from '../../components/hero';
import Input from '../../components/input';
import { University } from '../../@types';
import useLocalStorage  from '../../hooks/useLocalStorage';

const HomePage: React.FC = () => {
  const [universities, setUniversities] = useLocalStorage<University[]>('universitites', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=United%20Arab%20Emirates');
        const data: University[] = await response.json();

        setUniversities(data.map((item, idx) => {
          return {
            ...item,
            id: idx + 1,
          }
        }));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [setUniversities]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const columns = {
    name: {
      title: 'Name',
      sortable: true,
    },
    'state-province': {
      title: 'State'
    }
  };

  const items = useMemo(() => {
    return universities.filter(uni => {
      if (searchTerm) {
        return uni.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });
  }, [universities, searchTerm]);

  const handleActionClick = (action: string, id: number) => {
    if (action === 'delete') {
      setDeletingId(id);

      setTimeout(() => {
        setUniversities(prevData => prevData.filter(d => d.id !== id));
        setDeletingId(null);
      }, 300);
    }
  };

  const handleRowClick = (id: number) => {
    const university = universities.find(d => d.id === id);
  
    navigate('/details', { state: { university } });
  };

  return (
    <Container>
      <Hero
        title="Universities in UAE"
        breadcrumb={[
          {
            label: 'Home',
            path: '/'
          }
        ]}
      />
      <div className="filter-container">
        <Input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search universities"
        />
      </div>

      <Table
        deletingId={deletingId}
        data={items}
        columns={columns}
        actions={['delete']}
        onRowClick={handleRowClick}
        onActionClick={handleActionClick}
      />
    </Container>
  );
};

export default HomePage;
