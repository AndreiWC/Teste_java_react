PGDMP      ;                |         
   mydatabase    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16397 
   mydatabase    DATABASE     �   CREATE DATABASE mydatabase WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE mydatabase;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    24577    event    TABLE     �   CREATE TABLE public.event (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    status character varying(255) NOT NULL,
    institution_id bigint
);
    DROP TABLE public.event;
       public         heap    postgres    false    4            �            1259    24576    event_id_seq    SEQUENCE     �   CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.event_id_seq;
       public          postgres    false    218    4            �           0    0    event_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.event_id_seq OWNED BY public.event.id;
          public          postgres    false    217            �            1259    16400    institution    TABLE     f   CREATE TABLE public.institution (
    id bigint NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.institution;
       public         heap    postgres    false    4            �            1259    16399    institution_id_seq    SEQUENCE     �   CREATE SEQUENCE public.institution_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.institution_id_seq;
       public          postgres    false    216    4            �           0    0    institution_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.institution_id_seq OWNED BY public.institution.id;
          public          postgres    false    215            V           2604    24588    event id    DEFAULT     d   ALTER TABLE ONLY public.event ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);
 7   ALTER TABLE public.event ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            U           2604    16457    institution id    DEFAULT     p   ALTER TABLE ONLY public.institution ALTER COLUMN id SET DEFAULT nextval('public.institution_id_seq'::regclass);
 =   ALTER TABLE public.institution ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    24577    event 
   TABLE DATA           W   COPY public.event (id, name, start_date, end_date, status, institution_id) FROM stdin;
    public          postgres    false    218   <       �          0    16400    institution 
   TABLE DATA           /   COPY public.institution (id, name) FROM stdin;
    public          postgres    false    216   �       �           0    0    event_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.event_id_seq', 4, true);
          public          postgres    false    217            �           0    0    institution_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.institution_id_seq', 4, true);
          public          postgres    false    215            Z           2606    24590    event event_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.event DROP CONSTRAINT event_pkey;
       public            postgres    false    218            X           2606    16459    institution institution_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.institution
    ADD CONSTRAINT institution_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.institution DROP CONSTRAINT institution_pkey;
       public            postgres    false    216            [           2606    24597    event event_institution_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_institution_id_fkey FOREIGN KEY (institution_id) REFERENCES public.institution(id);
 I   ALTER TABLE ONLY public.event DROP CONSTRAINT event_institution_id_fkey;
       public          postgres    false    218    4696    216            �   V   x�3�t-K�+Q0�4202�50�52@0M93��K2�R9���J�����&�R#.c��L�)Hf!�2�,I-.IE�Ů0F��� -�'n      �   +   x�3���+.�,)-���S0�2B�q����LP�&\1z\\\ ��     